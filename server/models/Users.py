import mongoengine as me

class User(me.Document):
    email = me.StringField(required=True, unique=True)
    meta = {'collection': 'users'}