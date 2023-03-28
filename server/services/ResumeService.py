from server.services.FormRecognizerService import FormRecognizerService
from server.services.BlobStorageService import BlobStorageService
from server import app, oauth, env, meilisearchService
from server.models.Resumes import Resume
from azure.core.exceptions import ResourceNotFoundError
from server.errors.ResumeNotFoundError import ResumeNotFoundError
from server.errors.ServerError import ServerError
from celery.result import AsyncResult
from server.services.Worker import addResume, setTaskId, getApp
import io, base64

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
            raise ServerError
    
    def deleteResume(self, id):
        try:
            self.bs.delete(id)
            meilisearchService.index('resumes').delete_document(id)
        except ResourceNotFoundError:
            raise ResumeNotFoundError
        except Exception as e:
            raise ServerError
    
    def getResumeDetails(self, id):
        try:
            resume = meilisearchService.index('resumes').get_document(id)._Document__doc
            return resume
        except Exception as e:
            print(e)
            raise ServerError
    
    def getResumes(self):
        return Resume.objects()
    
    def searchResumes(self, query):
        if query:
            results = meilisearchService.index('resumes').search(query)['hits']
        else:
            results = [dict(r) for r in meilisearchService.index('resumes').get_all_documents()]
        return results

    def addResume(self, user, title, file):
        try:
            resume = Resume(user=user, title=title)
            resume.save()
            metadata = {'title': title, 'user': str(user.id), 'username': user.email}
            self.uploadResume(str(resume.id), file, metadata)
            taskId = addResume.delay(str(resume.id), metadata, file.content_type)
            setTaskId.delay(str(resume.id), taskId.task_id)
            return resume.id
        except Exception as e:
            print(e, 'Error adding resume')
            raise ServerError

    def getUserResumes(self, user):
        return Resume.objects(user=user)
    
    def uploadResume(self, rid, file, metadata):
        try:
            self.bs.upload(rid, file, metadata)
        except Exception as e:
            print(e)
            raise ServerError
    
    def getResumeStatus(self, rid):
        taskId = meilisearchService.index('tasks').get_document(rid)
        worker = getApp()
        result = AsyncResult(taskId, app=worker)
        return result.status
