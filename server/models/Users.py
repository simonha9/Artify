import mongoengine as me

class User(me.Document):
    username = me.StringField(required=True, unique=True)
    password = me.StringField(required=True)
    email = me.StringField(required=True, unique=True)
    meta = {'collection': 'users'}