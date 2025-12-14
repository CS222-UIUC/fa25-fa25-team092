import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState('all');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);

    setTimeout(() => {
      setResults([
        {
          id: '1',
          type: 'track',
          name: 'Blinding Lights',
          artist: 'The Weeknd',
          album: 'After Hours',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: '2',
          type: 'album',
          name: 'After Hours',
          artist: 'The Weeknd',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: '3',
          type: 'artist',
          name: 'The Weeknd',
          image: 'https://via.placeholder.com/150'
        }
      ]);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h1>Search Music</h1>
        <p>Find tracks, albums, artists, and playlists</p>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for songs, albums, artists..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>

        <div className="search-filters">
          <button
            type="button"
            className={`filter-option ${searchType === 'all' ? 'active' : ''}`}
            onClick={() => setSearchType('all')}
          >
            All
          </button>
          <button
            type="button"
            className={`filter-option ${searchType === 'tracks' ? 'active' : ''}`}
            onClick={() => setSearchType('tracks')}
          >
            Tracks
          </button>
          <button
            type="button"
            className={`filter-option ${searchType === 'albums' ? 'active' : ''}`}
            onClick={() => setSearchType('albums')}
          >
            Albums
          </button>
          <button
            type="button"
            className={`filter-option ${searchType === 'artists' ? 'active' : ''}`}
            onClick={() => setSearchType('artists')}
          >
            Artists
          </button>
        </div>
      </form>

      {loading && (
        <div className="loading">Searching...</div>
      )}

      {!loading && results.length > 0 && (
        <div className="search-results">
          {results.map((item) => (
            <Link
              key={item.id}
              to={`/${item.type}/${item.id}`}
              className="search-result-item"
            >
              <div className="result-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="result-info">
                <div className="result-name">{item.name}</div>
                {item.artist && (
                  <div className="result-artist">{item.artist}</div>
                )}
                {item.album && (
                  <div className="result-album">{item.album}</div>
                )}
                <div className="result-type">{item.type}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {!loading && query && results.length === 0 && (
        <div className="no-results">
          <p>No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
}

export default Search;

