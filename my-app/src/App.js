import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Authentication from './Authentication';
import ExpenseTracker from './ExpenseTracker'; 
import BudgetSetting from './BudgetSetting'; 
import UserProfile from './UserProfile';

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
    <div className="app">
      <Navbar user={user} onLogout={handleLogout} />
      <div className="content">
        {user ? (
          <>
            <UserProfile user={user} />
            <ExpenseTracker />
            <BudgetSetting />
          </>
          ) : (
            <Authentication onLogin={handleLogin} />
          )}
      </div>
    </div>
  );
};

export default App;