from server.services.FormRecognizerService import FormRecognizerService
from server.services.BlobStorageService import BlobStorageService
from server import app, oauth, env, meilisearchService
from azure.core.exceptions import ResourceNotFoundError
from server.errors.ResumeNotFoundError import ResumeNotFoundError
from server.errors.ServerError import ServerError
from celery.result import AsyncResult
from server.services.Worker import addResume, setTaskId, getApp
import io, base64, uuid

class ResumeService:
    def __init__(self):
        self.fr = FormRecognizerService.getInstance()
        self.bs = BlobStorageService.getInstance()
    
    def downloadResume(self, id):
        try:
            return self.bs.download(id)
        except ResourceNotFoundError:
            raise ResumeNotFoundError
        except Exception as e:
            raise ServerError(str(e))
    
    def deleteResume(self, id):
        try:
            self.bs.delete(id)
            meilisearchService.index('resumes').delete_document(id)
        except ResourceNotFoundError:
            raise ResumeNotFoundError
        except Exception as e:
            raise ServerError(str(e))
    
    def getResumeDetails(self, id):
        try:
            resume = meilisearchService.index('resumes').get_document(id)._Document__doc
            return resume
        except Exception:
            raise ResumeNotFoundError('Resume not found in meilisearch')

    def parseResumeResults(self, results):
        res = []
        d = {}
        for document in results:
            for k, v in document:
                d[k] = v
        res.append(d)
        return res

    def getResumes(self, offset=0, limit=10):
        r = meilisearchService.index('resumes').get_documents().results
        return self.parseResumeResults(r)
    
    def searchResumes(self, query):
        if query:
            results = meilisearchService.index('resumes').search(query)['hits']
        else:
            results = self.getResumes()
        return results

    def addResume(self, user, title, file):
        try:
            rid = str(uuid.uuid4())
            metadata = {'title': title, 'user': str(user.id), 'username': user.email}
            self.uploadResume(rid, file, metadata)
            taskId = addResume.delay(rid, metadata, file.content_type)
            setTaskId.delay(rid, taskId.task_id)
            return rid
        except Exception as e:
            print(e, 'Error adding resume')
            raise ServerError('Could not save resume to mongo: ' + str(e))

    def getUserResumes(self, userId):
        return meilisearchService.index('resumes').search(userId, {
            'filter': ['user = ' + str(userId)],
            'matchingStrategy': 'all'
        })['hits']
    
    def uploadResume(self, rid, file, metadata):
        try:
            self.bs.upload(rid, file, metadata)
        except Exception as e:
            print(e)
            raise ServerError('Could not upload resume to blobstorage: ' + str(e))
    
    def getResumeStatus(self, rid):
        try:
            document = meilisearchService.index('tasks').get_document(rid)._Document__doc
            worker = getApp()
            result = AsyncResult(document['task'], app=worker)
            return result.state
        except Exception:
            raise ServerError('Task not found, try again later')
