from mongoengine import Document, StringField, IdField, ListField, connect

# Connect to MongoDB
# connect() # once database is created

class User(Document):
    username = StringField(required=True, max_length=50, unique=True)
    netId = IdField(required=True, unique=True)
    likedSongs = ListField(StringField(max_length=30)) # List of song IDs, Song would be another schema
