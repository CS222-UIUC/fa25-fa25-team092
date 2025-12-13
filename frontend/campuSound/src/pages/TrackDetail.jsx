import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TrackDetail.css';

function TrackDetail() {
  const { id } = useParams();
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch(`/api/tracks/${id}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setTrack(data);
    //     setLoading(false);
    //   });

    // Mock data
    setTimeout(() => {
      setTrack({
        id: id,
        name: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
        image: 'https://via.placeholder.com/300',
        duration: '3:20',
        releaseDate: '2019',
        genre: 'Pop',
        rating: 4.5,
        totalRatings: 1234
      });
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <div className="track-container"><div className="loading">Loading track...</div></div>;
  }

  return (
    <div className="track-container">
      <div className="track-header">
        <div className="track-image">
          <img src={track?.image} alt={track?.name} />
        </div>
        <div className="track-info">
          <h1>{track?.name}</h1>
          <Link to={`/artist/${track?.artist}`} className="track-artist">
            {track?.artist}
          </Link>
          <Link to={`/album/${track?.album}`} className="track-album">
            {track?.album}
          </Link>
          <div className="track-meta">
            <span>{track?.duration}</span>
            <span>•</span>
            <span>{track?.releaseDate}</span>
            <span>•</span>
            <span>{track?.genre}</span>
          </div>
          <div className="track-rating">
            <span className="rating-value">⭐ {track?.rating}</span>
            <span className="rating-count">({track?.totalRatings} ratings)</span>
          </div>
          <div className="track-actions">
            <button className="action-btn primary">Play</button>
            <button className="action-btn">Add to Playlist</button>
            <button className="action-btn">Share</button>
          </div>
        </div>
      </div>

      <div className="track-sections">
        <div className="section">
          <h2>Discussion</h2>
          <Link to={`/forums?track=${track?.name}`} className="view-discussion-btn">
            View Discussions
          </Link>
          <Link to={`/forums/create?track=${track?.name}&artist=${track?.artist}`} className="create-discussion-btn">
            Start Discussion
          </Link>
        </div>

        <div className="section">
          <h2>Reviews</h2>
          <div className="reviews-list">
            <div className="review-item">
              <div className="review-header">
                <div className="review-author">jdoe2</div>
                <div className="review-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="review-text">
                This song is absolutely amazing! The production is top-notch.
              </div>
            </div>
            <div className="review-item">
              <div className="review-header">
                <div className="review-author">asmith3</div>
                <div className="review-rating">⭐⭐⭐⭐</div>
              </div>
              <div className="review-text">
                Great track, really catchy melody and excellent vocals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackDetail;

