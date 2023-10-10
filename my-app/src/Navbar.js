import React from 'react';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav>
      <div className="logo">Your App Name</div>
      {user ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </nav>
  );
};

export default Navbar;