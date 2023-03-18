import mongoengine as me

class Resume(me.Document):
    file_data = me.BinaryField()