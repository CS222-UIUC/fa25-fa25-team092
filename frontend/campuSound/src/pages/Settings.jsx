import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

function Settings() {
  const [user, setUser] = useState(null);
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    publicProfile: true,
    showActivity: true
  });
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Replace with actual API call
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handlePreferenceChange = (key) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    // TODO: Save to backend
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account and preferences</p>
      </div>

      <div className="settings-sections">
        <div className="settings-section">
          <h2>Account</h2>
          <div className="settings-item">
            <div className="settings-item-info">
              <div className="settings-item-label">NetID</div>
              <div className="settings-item-value">{user?.netId || 'Not set'}</div>
            </div>
          </div>
          <div className="settings-item">
            <div className="settings-item-info">
              <div className="settings-item-label">Name</div>
              <div className="settings-item-value">{user?.name || 'Not set'}</div>
            </div>
            <button className="edit-btn">Edit</button>
          </div>
        </div>

        <div className="settings-section">
          <h2>Preferences</h2>
          <div className="settings-item">
            <div className="settings-item-info">
              <div className="settings-item-label">Email Notifications</div>
              <div className="settings-item-desc">Receive email updates about your activity</div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={preferences.emailNotifications}
                onChange={() => handlePreferenceChange('emailNotifications')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="settings-item">
            <div className="settings-item-info">
              <div className="settings-item-label">Public Profile</div>
              <div className="settings-item-desc">Allow others to view your profile</div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={preferences.publicProfile}
                onChange={() => handlePreferenceChange('publicProfile')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="settings-item">
            <div className="settings-item-info">
              <div className="settings-item-label">Show Activity</div>
              <div className="settings-item-desc">Share your listening activity with friends</div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={preferences.showActivity}
                onChange={() => handlePreferenceChange('showActivity')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2>Danger Zone</h2>
          <div className="settings-item">
            <div className="settings-item-info">
              <div className="settings-item-label">Logout</div>
              <div className="settings-item-desc">Sign out of your account</div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

