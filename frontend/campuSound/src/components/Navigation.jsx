import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <nav className="navigation">
      <div className="nav-header">
        <button onClick={handleLogoClick} className="logo-button" aria-label="Go to home">
          <div className="logo-container">
            <img src={logo} className="logo" alt="CampusSound" />
            <span className="logo-text">CampusSound</span>
          </div>
        </button>
      </div>
      
      <div className="sidebar-nav">
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <span className="nav-icon"></span>
          <span className="nav-label">Home</span>
        </Link>
        <Link to="/search" className={`nav-item ${location.pathname === '/search' ? 'active' : ''}`}>
          <span className="nav-icon"></span>
          <span className="nav-label">Explore</span>
        </Link>
        <Link to="/forums" className={`nav-item ${location.pathname.startsWith('/forums') ? 'active' : ''}`}>
          <span className="nav-icon"></span>
          <span className="nav-label">Forums</span>
        </Link>
        <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
          <span className="nav-icon"></span>
          <span className="nav-label">Profile</span>
        </Link>
        <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}>
          <span className="nav-icon"></span>
          <span className="nav-label">Settings</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
