import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Forums from './pages/Forums';
import { PlaylistDetail, CreatePlaylist } from './pages/Playlists';
import TrackDetail from './pages/TrackDetail';
import PostDetail from './pages/PostDetail';
import Settings from './pages/Settings';
import './App.css';

// Protected Route component
function ProtectedRoute({ children }) {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="app-layout">
                <Navigation />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/forums" element={<Forums />} />
                    <Route path="/forums/:id" element={<PostDetail />} />
                    <Route path="/playlists/:id" element={<PlaylistDetail />} />
                    <Route path="/playlists/create" element={<CreatePlaylist />} />
                    <Route path="/track/:id" element={<TrackDetail />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
