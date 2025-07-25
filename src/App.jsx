import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import LoginPage from './pages/LoginPage';
import { isJwtExpired } from './utils/jwtUtils';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token') && !isJwtExpired(localStorage.getItem('token')); // checks for token presence

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes grouped under ProtectedRoute */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            {/* Add other protected pages here */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
