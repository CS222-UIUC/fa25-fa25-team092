import { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/feed')
    //   .then(res => res.json())
    //   .then(data => {
    //     setFeed(data);
    //     setLoading(false);
    //   });

    // Mock data for now
    setTimeout(() => {
      setFeed([
        {
          id: 1,
          user: 'jdoe2',
          userName: 'Jane Doe',
          action: 'listened to',
          song: 'Blinding Lights',
          artist: 'The Weeknd',
          time: '2 hours ago',
          type: 'recent'
        },
        {
          id: 2,
          user: 'asmith3',
          userName: 'Alex Smith',
          action: 'is listening to',
          song: 'As It Was',
          artist: 'Harry Styles',
          time: '5 minutes ago',
          type: 'current'
        },
        {
          id: 3,
          user: 'bwilson4',
          userName: 'Bob Wilson',
          action: 'most played',
          song: 'Watermelon Sugar',
          artist: 'Harry Styles',
          time: '1 day ago',
          type: 'most_played'
        }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <div className="home-container"><div className="loading">Loading feed...</div></div>;
  }

  return (
    <div className="home-container">
      <div className="feed-header">
        <h1>Friends Feed</h1>
        <p>See what your friends are listening to</p>
      </div>

      <div className="feed-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Most Recent</button>
        <button className="filter-btn">Most Played</button>
      </div>

      <div className="feed-list">
        {feed.length === 0 ? (
          <div className="empty-feed">
            <p>No activity to show. Start following friends to see their music activity!</p>
          </div>
        ) : (
          feed.map((item) => (
            <div key={item.id} className="feed-item">
              <div className="feed-item-avatar">
                <div className="avatar-circle">{item.userName.charAt(0)}</div>
              </div>
              <div className="feed-item-content">
                <div className="feed-item-header">
                  <span className="feed-user-name">{item.userName}</span>
                  <span className="feed-action">{item.action}</span>
                </div>
                <div className="feed-song-info">
                  <span className="feed-song-name">{item.song}</span>
                  <span className="feed-artist-name">by {item.artist}</span>
                </div>
                <div className="feed-item-footer">
                  <span className="feed-time">{item.time}</span>
                  {item.type === 'most_played' && (
                    <span className="feed-badge">Most Played</span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;

