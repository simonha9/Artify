import mongoengine as me
from .Users import User

class Resume(me.Document):
    user = me.ReferenceField(User, required=True)
    title = me.StringField(required=True)
    dotSize = me.FloatField()
    irrationalDenominator = me.FloatField()
    shapeCount = me.IntField()
    frames = me.IntField()

    meta = {'collection': 'resumes'}