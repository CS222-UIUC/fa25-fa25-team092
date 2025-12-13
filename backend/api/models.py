from django.db import models

class Song(models.Model):
    title = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    album = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.title} by {self.artist}"


class User(models.Model):
    username = models.CharField(max_length=50, unique=True)
    netId = models.CharField(max_length=50, unique=True)
    likedSongs = models.ManyToManyField(Song, related_name='liked_by')

    def __str__(self):
        return self.username
