from server.services.FormRecognizerService import FormRecognizerService
from server.services.BlobStorageService import BlobStorageService
from server import app, oauth, env, meilisearchService
from server.models.Resumes import Resume
from azure.core.exceptions import ResourceNotFoundError
from server.errors.ResumeNotFoundError import ResumeNotFoundError
from server.errors.ServerError import ServerError
import io

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
            buffer = io.BytesIO()
            buffer.write(file.read())
            metadata = {'title': title, 'user': str(user.id)}
            self.bs.upload(str(resume.id), buffer.getvalue(), metadata)

            result = self.fr.extract(buffer.getvalue(), file.content_type)
            res = self.fr.analyzeResults(result)
            res['id'] = str(resume.id)
            for key in metadata:
                res[key] = metadata[key]

            meilisearchService.index('resumes').add_documents(res)

            return resume.id
        except Exception as e:
            print(e, 'Error adding resume')
            raise ServerError
        finally:
            buffer.close()
    

    def getUserResumes(self, user):
        return Resume.objects(user=user)