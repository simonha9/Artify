import mongoengine as me

class User(me.Document):
    password = me.StringField(required=True)
    email = me.StringField(required=True, unique=True)
    meta = {'collection': 'users'}