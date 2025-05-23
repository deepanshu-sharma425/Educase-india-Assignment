import React, { useState, useEffect } from 'react';
import './profile.css';
import profileImg from '../../Ellipse 114.png';
import profileicon from '../../Group 1585@2x.png'

function Profile() {
    const [userData, setUserData] = useState({
        fullname: 'Marry Doe',
        email: 'Marry@Gmail.Com'
    });

    useEffect(() => {
        // Get user data from localStorage when component mounts
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const parsedData = JSON.parse(storedUserData);
            setUserData({
                fullname: parsedData.fullname || 'Marry Doe',
                email: parsedData.email || 'Marry@Gmail.Com'
            });
        }
    }, []);

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>Account Settings</h1>
            </div>

            <div className="profile-content">
                <div className="profile-info">
                    <div className="profile-image-container">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="profile-image"
                        />
                        <div className="camera-icon">
                            <img src={profileicon} alt="Camera Icon" width="24px" height="24px" />
                        </div>
                    </div>

                    <div className="profile-details">
                        <h2>{userData.fullname}</h2>
                        <p className="profile-email">{userData.email}</p>
                    </div>
                </div>

                <div className="profile-description">
                    <p>
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing 
                    </p>
                    <p>Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut</p>
                    <p>Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                </div>

                <div className="profile-divider"></div>
            </div>
        </div>
    );
}

export default Profile;