from rest_framework import serializers
from .models import User, Song

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    likedSongs = SongSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'netId', 'likedSongs']
