import mongoengine as me
from server.models.Users import User

class Resume(me.Document):
    user = me.ReferenceField(User, required=True)
    title = me.StringField(required=True)
    meta = {'collection': 'resumes'}