from django.urls import path
from .views import (
    UserCreateView,
    UserDetailView,
    SongListCreateView,
    like_song,
    unlike_song
)

urlpatterns = [
    # User endpoints
    path('users/', UserCreateView.as_view()),          # POST create user
    path('users/<int:pk>/', UserDetailView.as_view()), # GET user details

    # Song endpoints
    path('songs/', SongListCreateView.as_view()),      # GET/POST songs

    # Like/unlike endpoints
    path('users/<int:user_id>/like/<int:song_id>/', like_song),
    path('users/<int:user_id>/unlike/<int:song_id>/', unlike_song),
]
