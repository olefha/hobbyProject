import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Authentication from './Authentication';
import ExpenseTracker from './ExpenseTracker'; 
import BudgetSetting from './BudgetSetting'; 
import UserProfile from './UserProfile';
import Settings from './Settings';

/**
 * Main component for the application.
 * Responsible for managing the user's authentication status and rendering the appropriate components.
 * Uses 'useState' hook to manage the user state.
 * - user: an object representing the currently logged in user
 * @returns 
 */

const App = () => {
  const [user, setUser] = useState(null); // Initially, the user is not logged in

  const handleLogin = () => {
    // Perform authentication logic here (e.g., API call)
    // When login is successful, update the user state
    setUser({ 
      username: 'exampleUser' ,
      name: 'Ola Norman',
      email: 'user@example.com',
      profilePicture: ''}); // Replace with actual user data
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing user data)
    // When logout is successful, update the user state
    setUser(null);
  };

  // Render the main structure of the application
  return (
    <Router>
      <div className="app">
        <Navbar user={user} onLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route path="/" element={user ? <ExpenseTracker /> : <Authentication onLogin={handleLogin} />} />
            <Route path="/profile" element={user ? <UserProfile user={user} /> : <Authentication onLogin={handleLogin} />} />
            <Route path="/settings" element={user ? <Settings /> : <Authentication onLogin={handleLogin} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;