import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      const storedUser = localStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : { netId: 'jdoe2', name: 'Jane Doe' });
      setStats({
        topGenres: ['Pop', 'Indie', 'Rock', 'Electronic', 'Hip-Hop'],
        topArtists: [
          { name: 'The Weeknd', plays: 245 },
          { name: 'Harry Styles', plays: 189 },
          { name: 'Taylor Swift', plays: 156 }
        ],
        totalSongs: 73,
        totalPlaylists: 3
      });
      setPlaylists([
        { id: 1, name: 'Studying', songCount: 25, isPublic: true },
        { id: 2, name: 'Workout', songCount: 30, isPublic: false },
        { id: 3, name: 'Driving Playlist', songCount: 18, isPublic: true }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <div className="profile-container"><div className="loading">Loading profile...</div></div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-large">{user?.name?.charAt(0) || user?.netId?.charAt(0) || 'U'}</div>
        </div>
        <div className="profile-info">
          <h1>{user?.name || user?.netId || 'User'}</h1>
          <p className="profile-netid">@{user?.netId || 'netid'}</p>
          <div className="profile-stats-summary">
            <div className="stat-item">
              <div className="stat-value">{stats?.totalSongs || 0}</div>
              <div className="stat-label">Songs</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{stats?.totalPlaylists || 0}</div>
              <div className="stat-label">Playlists</div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button className="tab active">Stats</button>
        <button className="tab">Playlists</button>
        <button className="tab">Activity</button>
      </div>

      <div className="profile-content">
        <div className="stats-section">
          <h2>Top Genres</h2>
          <div className="genres-list">
            {stats?.topGenres?.map((genre, index) => (
              <div key={index} className="genre-tag">
                {genre}
              </div>
            ))}
          </div>

          <h2>Top Artists</h2>
          <div className="artists-list">
            {stats?.topArtists?.map((artist, index) => (
              <div key={index} className="artist-item">
                <div className="artist-rank">{index + 1}</div>
                <div className="artist-info">
                  <div className="artist-name">{artist.name}</div>
                  <div className="artist-plays">{artist.plays} plays</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="playlists-section">
          <div className="section-header">
            <h2>My Playlists</h2>
            <Link to="/playlists/create" className="create-playlist-btn">
              + Create Playlist
            </Link>
          </div>
          <div className="playlists-grid">
            {playlists.map((playlist) => (
              <Link
                key={playlist.id}
                to={`/playlists/${playlist.id}`}
                className="playlist-card"
              >
                <div className="playlist-icon">🎵</div>
                <div className="playlist-name">{playlist.name}</div>
                <div className="playlist-meta">
                  <span>{playlist.songCount} songs</span>
                  {playlist.isPublic && <span className="public-badge">Public</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

