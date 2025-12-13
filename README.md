CampuSound: A Music Social Network for UIUC Students

Group Members:

Aryanna (among), Delilah (meerman3), Akhilesh (am88)

Roles:

QA Engineer: Akhilesh
UX Designer: Aryana
Business Analyst: Delilah
DevOps Engineer: All of us
Project Manager: All of us
Software Developer: All of us



Summary: 

Currently, there’s no dedicated platform for UIUC music enthusiasts to connect, share their musical tastes, and discover new artists. 
Existing platforms (Spotify, Instagram, TikTok) are either too broad, geared toward different demographics, or lack music-centered discussion features. 
Our web-application, designed to be a social network like Instagram with music features similar to Spotify,  aims to foster a community of music lovers that’s catered towards UIUC students. 
In this web application users can connect to other music lovers through sharing playlists, discussing songs on forums and viewing a feed of popular songs.

Functionality:
1. User profiles with music preferences and listening history.
2. Song-based discussion forums with tags and filters to sort through relevant comments.
3. User Authentication and Login
4. Users can view stats (top genres, artists, ratings history).


Installation Instructions:

Download current or r at least 20.19+ of Node.js here
https://nodejs.org/en/download/

Download Django using:
pip install django


Steps to run the Django Environment

1. Open A Terminal in PowerShell

2. Move into the backend folder of the project
    The Path should end with '\fa25-fa25-team092\backend'

3. Type this command in Terminal to Activate the environment:

    venv\Scripts\activate

    The Terminal path should look something like this:

    (venv) PS ...\backend>


4. Install the Dependencies for Requirements.txt

    pip install -r requirements.txt

5. Run Migrations

    .\venv\Scripts\python.exe manage.py makemigrations
    .\venv\Scripts\python.exe manage.py migrate


6. Run The Server:

    .\venv\Scripts\python.exe manage.py runserver

    Should look like:

    Starting development server at http://127.0.0.1:8000/



Steps for starting up the React Server on the Frontend

1. Open a Terminal in PowerShell

2. Move into the frontend folder of the project
    The Path should end with '\fa25-fa25-team092\frontend'

3. Install dependencies
    npm install

4. Start the Development Server

    npm run dev

   should look like:

   
> my-app@0.0.0 dev
> vite


  VITE v7.1.10  ready in 589 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help


5. Open the Url in a browser
