from server.services.FormRecognizerService import FormRecognizerService
from server.services.BlobStorageService import BlobStorageService
from server.models.Users import User
from server import app, oauth, env, meilisearchService
from server.errors.UserNotFoundError import UserNotFoundError
from server.errors.ServerError import ServerError
from server.services.ResumeService import ResumeService
import io


class UserService:

    def __init__(self):
        self.fr = FormRecognizerService.getInstance()
        self.bs = BlobStorageService.getInstance()
        self.resumeService = ResumeService()

    def findUserById(self, id):
        try:
            user = User.objects.only('id', 'email').get(id=id)
        except User.DoesNotExist:
            raise UserNotFoundError
        return user

    def findUserByEmail(self, email):
        try:
            user = User.objects.only('id', 'email').get(email=email)
        except User.DoesNotExist:
            user = None
        return user

    def addUser(self, email):
        user = User(email=email)
        user.save()
        return user

    def getUsers(self):
        user = User.objects()
        return user

    def addResumeToUser(self, userId, resume):
        user = User.objects.get(id=userId)
        user.resumes.append(resume)
        user.save()
    
    def deleteUser(self, id):
        try:
            user = User.objects.get(id=id)
            user.delete()
        except User.DoesNotExist:
            raise UserNotFoundError

    def uploadResume(self, id, uploadedFile, title):
        user = self.findUserById(id)

        try:
            rid = self.resumeService.addResume(user, title, uploadedFile)
            return rid, user.id
        except Exception as e:
            print(e)
            raise ServerError
    
    def getResumes(self, id):
        try:
            user = User.objects.get(id=id)
            return self.resumeService.getUserResumes(user)
        except User.DoesNotExist:
            raise UserNotFoundError