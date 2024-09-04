// src/App.js
import React, { useState } from 'react';
import ThriftStorePage from './ThriftStorePage';
import ProfilePage from './ProfilePage';
import './App.css'; // Import the main CSS file

const App = () => {
  const [currentPage, setCurrentPage] = useState('thriftStore'); // State to manage the current page

  // Function to switch pages
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Navigation Menu */}
      <nav>
        <ul className="nav-links">
          <li>
            <button onClick={() => handlePageChange('thriftStore')}>Home</button>
          </li>
          <li>
            <button onClick={() => handlePageChange('profile')}>Profile</button>
          </li>
        </ul>
      </nav>

      {/* Conditional Rendering of Pages */}
      {currentPage === 'thriftStore' && <ThriftStorePage />}
      {currentPage === 'profile' && <ProfilePage />}
    </div>
  );
};

export default App;