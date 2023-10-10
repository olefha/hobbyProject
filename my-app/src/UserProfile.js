import React, { useState } from 'react';

/**
 * Receives a user object as a prop and displays the user's profile information.
 * Manages states for the user's name, email, and profile picture.
 * 
 * HandleUpateProfile is called when the user clicks the update profile button. 
 * @returns 
 */

const UserProfile = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [profilePicture, setProfilePicture] = useState(user.profilePicture);

    const handleUpdateProfile = () => {
        // Perform update profile logic here (e.g., API call)
        // When update is successful, update the user state
        // setUser({ name: 'exampleUser' }); // Replace with actual user data
        // display success message
    };

    return (
        <div className= "user-profile">
            <h2>User Profile</h2>
            <div className="profile-form">
                <label>Name:</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email:</label>
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Profile Picture:</label>
                <input 
                    type="text"
                    value={profilePicture}
                    onChange={(e) => setProfilePicture(e.target.value)}
                />
                <button onClick={handleUpdateProfile}>Update Profile</button>
            </div>
        </div>
    );
};

export default UserProfile;