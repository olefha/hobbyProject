import React, { useState } from 'react';

/**
 * Component responsible for authenticating users.
 * Uses 'useState' hook to manage two pieces of state:
 * - email: the user's email
 * - password: the user's password
 * @returns 
 */

const Authentication = ({ onLogin, onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here (e.g., API call)
        // When login is successful, call onLogin
        onLogin(email, password);
    };

    const handleRegister = () => {
        // Perform register logic here (e.g., API call)
        // When register is successful, call onRegister
        onRegister(email, password);
    };

    return (
        <div className="authentication">
            <h2>Authentication</h2>
            <div className="authentication-form">
                <h3>Login</h3>
                <input
                    type="email"
                    placeholder= "Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
            <div className="register-form">
                <h3>Register</h3>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );

};

export default Authentication;