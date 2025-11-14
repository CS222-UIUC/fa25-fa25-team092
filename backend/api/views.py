from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import User, Song
from .serializers import UserSerializer, SongSerializer


# Create a new user
class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Get user details (including liked songs)
class UserDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# List all songs OR create a new song
class SongListCreateView(generics.ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


# Like a song
@api_view(['POST'])
def like_song(request, user_id, song_id):
    try:
        user = User.objects.get(id=user_id)
        song = Song.objects.get(id=song_id)
    except (User.DoesNotExist, Song.DoesNotExist):
        return Response({"error": "User or Song not found"}, status=status.HTTP_404_NOT_FOUND)

    user.likedSongs.add(song)
    return Response({"message": "Song liked successfully"})


# Unlike a song
@api_view(['POST'])
def unlike_song(request, user_id, song_id):
    try:
        user = User.objects.get(id=user_id)
        song = Song.objects.get(id=song_id)
    except (User.DoesNotExist, Song.DoesNotExist):
        return Response({"error": "User or Song not found"}, status=status.HTTP_404_NOT_FOUND)

    user.likedSongs.remove(song)
    return Response({"message": "Song unliked successfully"})
