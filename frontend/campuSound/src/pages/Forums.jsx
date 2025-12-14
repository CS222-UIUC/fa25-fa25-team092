import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Forums.css';

function Forums() {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [loading, setLoading] = useState(true);

  const tags = ['all', 'pop', 'rock', 'indie', 'hip-hop', 'electronic', 'jazz', 'classical'];

  useEffect(() => {

    setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: 'What are your thoughts on The Weeknd\'s new album?',
          author: 'jdoe2',
          authorName: 'Jane Doe',
          song: 'Blinding Lights',
          artist: 'The Weeknd',
          tag: 'pop',
          comments: 12,
          likes: 24,
          time: '2 hours ago'
        },
        {
          id: 2,
          title: 'Best indie artists to discover this year?',
          author: 'asmith3',
          authorName: 'Alex Smith',
          song: null,
          artist: null,
          tag: 'indie',
          comments: 8,
          likes: 15,
          time: '5 hours ago'
        },
        {
          id: 3,
          title: 'Discussion: "As It Was" by Harry Styles',
          author: 'bwilson4',
          authorName: 'Bob Wilson',
          song: 'As It Was',
          artist: 'Harry Styles',
          tag: 'pop',
          comments: 20,
          likes: 45,
          time: '1 day ago'
        }
      ]);
      setLoading(false);
    }, 500);
  }, [selectedTag, sortBy]);

  const filteredPosts = selectedTag === 'all' 
    ? posts 
    : posts.filter(post => post.tag === selectedTag);

  return (
    <div className="forums-container">
      <div className="forums-header">
        <h1>Discussion Forums</h1>
        <p>Share your thoughts and discover new music</p>
        <Link to="/forums/create" className="create-post-btn">
          + Create Post
        </Link>
      </div>

      <div className="forums-filters">
        <div className="tag-filters">
          {tags.map(tag => (
            <button
              key={tag}
              className={`tag-filter ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        <div className="sort-filters">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="comments">Most Comments</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading posts...</div>
      ) : (
        <div className="posts-list">
          {filteredPosts.length === 0 ? (
            <div className="empty-posts">
              <p>No posts found. Be the first to start a discussion!</p>
            </div>
          ) : (
            filteredPosts.map(post => (
              <Link key={post.id} to={`/forums/${post.id}`} className="post-card">
                <div className="post-header">
                  <div className="post-author">
                    <div className="author-avatar">{post.authorName.charAt(0)}</div>
                    <div>
                      <div className="author-name">{post.authorName}</div>
                      <div className="post-time">{post.time}</div>
                    </div>
                  </div>
                  <div className={`post-tag tag-${post.tag}`}>
                    {post.tag}
                  </div>
                </div>
                
                <h3 className="post-title">{post.title}</h3>
                
                {post.song && (
                  <div className="post-song-info">
                    <span className="song-name">{post.song}</span>
                    {post.artist && (
                      <>
                        <span className="separator">by</span>
                        <span className="artist-name">{post.artist}</span>
                      </>
                    )}
                  </div>
                )}

                <div className="post-footer">
                  <div className="post-stats">
                    <span className="stat-item">💬 {post.comments}</span>
                    <span className="stat-item">❤️ {post.likes}</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Forums;

