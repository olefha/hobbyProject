import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav>
      <div className="logo">Your App Name</div>
      <ul className="nav-Links">
        <li><Link to="/">Expenses & Budget</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
      {user ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button>Login</button> // Replace with actual login button
      )}
    </nav>
  );
};

export default Navbar;