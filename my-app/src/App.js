import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import ExpenseTracker from './ExpenseTracker'; 
import BudgetSetting from './BudgetSetting'; 

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
    setUser({ username: 'exampleUser' }); // Replace with actual user data
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
      
      {user ? (
        <>
          <ExpenseTracker />
          <BudgetSetting />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;