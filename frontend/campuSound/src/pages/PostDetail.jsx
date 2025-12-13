import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PostDetail.css';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API calls
    // fetch(`/api/forums/${id}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setPost(data.post);
    //     setComments(data.comments);
    //     setLoading(false);
    //   });

    // Mock data
    setTimeout(() => {
      setPost({
        id: id,
        title: 'What are your thoughts on The Weeknd\'s new album?',
        content: 'I\'ve been listening to After Hours on repeat and I think it\'s one of his best works. The production is incredible and the themes are so well-developed. What do you all think?',
        author: 'jdoe2',
        authorName: 'Jane Doe',
        song: 'Blinding Lights',
        artist: 'The Weeknd',
        tag: 'pop',
        likes: 24,
        time: '2 hours ago'
      });
      setComments([
        {
          id: 1,
          author: 'asmith3',
          authorName: 'Alex Smith',
          content: 'I completely agree! The Weeknd really outdid himself with this one.',
          likes: 5,
          time: '1 hour ago'
        },
        {
          id: 2,
          author: 'bwilson4',
          authorName: 'Bob Wilson',
          content: 'The synthwave vibes are amazing. Definitely my favorite album of the year.',
          likes: 8,
          time: '45 minutes ago'
        }
      ]);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    // TODO: Replace with actual API call
    // await fetch(`/api/forums/${id}/comments`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ content: newComment })
    // });

    // Mock: add comment locally
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setComments([...comments, {
      id: comments.length + 1,
      author: user.netId || 'user',
      authorName: user.name || 'User',
      content: newComment,
      likes: 0,
      time: 'just now'
    }]);
    setNewComment('');
  };

  if (loading) {
    return <div className="post-detail-container"><div className="loading">Loading post...</div></div>;
  }

  return (
    <div className="post-detail-container">
      <Link to="/forums" className="back-link">← Back to Forums</Link>

      <div className="post-detail">
        <div className="post-header">
          <div className="post-author">
            <div className="author-avatar">{post?.authorName?.charAt(0)}</div>
            <div>
              <div className="author-name">{post?.authorName}</div>
              <div className="post-time">{post?.time}</div>
            </div>
          </div>
          <div className={`post-tag tag-${post?.tag}`}>
            {post?.tag}
          </div>
        </div>

        <h1 className="post-title">{post?.title}</h1>

        {post?.song && (
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

        <div className="post-content">
          {post?.content}
        </div>

        <div className="post-actions">
          <button className="action-btn">❤️ {post?.likes}</button>
          <button className="action-btn">💬 {comments.length}</button>
          <button className="action-btn">Share</button>
        </div>
      </div>

      <div className="comments-section">
        <h2>Comments ({comments.length})</h2>

        <form onSubmit={handleSubmitComment} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            rows="3"
            className="comment-input"
          />
          <button type="submit" className="submit-comment-btn">Post Comment</button>
        </form>

        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <div className="comment-author">
                <div className="comment-avatar">{comment.authorName.charAt(0)}</div>
                <div>
                  <div className="comment-author-name">{comment.authorName}</div>
                  <div className="comment-time">{comment.time}</div>
                </div>
              </div>
              <div className="comment-content">{comment.content}</div>
              <div className="comment-actions">
                <button className="comment-action-btn">❤️ {comment.likes}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostDetail;

