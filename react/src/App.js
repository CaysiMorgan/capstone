import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import DashboardPage from './pages/DashboardPage';
import UserProfile from './pages/UserProfile'; // Import UserProfilePage
import Timer from './pages/Timer';
import PasswordPage from './pages/PasswordPage';
import SignOutPage from './pages/SignOutPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forum from './pages/Forum';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/UploadPage" element={<UploadPage />} />
        <Route path="/userprofile" element={<UserProfile />} /> {/* Add this line for UserProfilePage */}
        <Route path="/timer" element={<Timer />} />
        <Route path="/PasswordPage" element={<PasswordPage />} />
        <Route path="/SignOutPage" element={<SignOutPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forum" element={<Forum />} /> {/* Route for the chat component */}
      </Routes>
    </Router> 
  );
}

export default App;