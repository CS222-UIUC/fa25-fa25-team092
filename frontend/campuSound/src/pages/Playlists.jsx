import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Playlists.css';

function PlaylistDetail() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setPlaylist({
        id: id,
        name: 'My Favorites',
        owner: 'jdoe2',
        ownerName: 'Jane Doe',
        isPublic: true,
        songCount: 25,
        description: 'A collection of my all-time favorite songs'
      });
      setSongs([
        { id: 1, name: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20' },
        { id: 2, name: 'As It Was', artist: 'Harry Styles', album: "Harry's House", duration: '2:47' },
        { id: 3, name: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', duration: '2:54' }
      ]);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <div className="playlist-container"><div className="loading">Loading playlist...</div></div>;
  }

  return (
    <div className="playlist-container">
      <div className="playlist-header">
        <div className="playlist-info">
          <h1>{playlist?.name}</h1>
          <p className="playlist-owner">by {playlist?.ownerName}</p>
          {playlist?.description && (
            <p className="playlist-description">{playlist.description}</p>
          )}
          <div className="playlist-meta">
            <span>{playlist?.songCount || 0} songs</span>
            {playlist?.isPublic && <span className="public-badge">Public</span>}
          </div>
        </div>
        <div className="playlist-actions">
          <button className="action-btn">Share</button>
          <button className="action-btn primary">Play</button>
        </div>
      </div>

      <div className="playlist-songs">
        <h2>Songs</h2>
        {songs.length === 0 ? (
          <div className="empty-playlist">
            <p>This playlist is empty</p>
          </div>
        ) : (
          <div className="songs-list">
            {songs.map((song, index) => (
              <div key={song.id} className="song-item">
                <div className="song-number">{index + 1}</div>
                <div className="song-info">
                  <div className="song-name">{song.name}</div>
                  <div className="song-artist">{song.artist}</div>
                </div>
                <div className="song-album">{song.album}</div>
                <div className="song-duration">{song.duration}</div>
                <button className="song-action">⋯</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CreatePlaylist() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert('Playlist created!');
  };

  return (
    <div className="create-playlist-container">
      <div className="create-playlist-card">
        <h1>Create New Playlist</h1>
        <form onSubmit={handleSubmit} className="create-playlist-form">
          <div className="form-group">
            <label htmlFor="name">Playlist Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Studying Playlist"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description (optional)</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your playlist..."
              rows="4"
            />
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
              />
              Make this playlist public
            </label>
          </div>

          <div className="form-actions">
            <Link to="/profile" className="cancel-btn">Cancel</Link>
            <button type="submit" className="submit-btn">Create Playlist</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { PlaylistDetail, CreatePlaylist };

