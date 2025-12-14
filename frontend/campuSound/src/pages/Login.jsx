import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [netId, setNetId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!netId || !password) {
      setError('Please enter both NetID and password');
      return;
    }

    // Check if NetID ends with @illinois.edu or is a valid UIUC NetID format
    const isValidNetId = netId.includes('@illinois.edu');
    
    if (!isValidNetId) {
      setError('Please enter a valid UIUC NetID email (e.g., jdoe2@illinois.edu)');
      return;
    }

    try {

      localStorage.setItem('user', JSON.stringify({ netId, isAuthenticated: true }));
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome to CampusSound</h1>
        <p className="subtitle">Connect with UIUC music lovers</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="netId">UIUC NetID Email</label>
            <input
              type="text"
              id="netId"
              value={netId}
              onChange={(e) => setNetId(e.target.value)}
              placeholder="jdoe2@illinois.edu"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <p className="help-text">
          Need help? Contact support or verify your NetID with UIUC.
        </p>
      </div>
    </div>
  );
}

export default Login;

