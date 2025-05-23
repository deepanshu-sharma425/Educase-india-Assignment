import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signin.css'; 

function sigin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Extract username from email (part before @)
    const emailParts = formData.email.split('@');
    const username = emailParts[0];
    
    // Save the extracted username and email to localStorage
    localStorage.setItem('userData', JSON.stringify({
      fullname: username,  // Use the part before @ as the name
      email: formData.email
    }));
    
    // Navigate to profile page
    navigate('/profile');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Signin to your </h1>
        <h1>PopX account</h1>
        <p className="login-subtext">Lorem ipsum dolor sit amet</p>
        <p className="login-subtext1">consectetur adipiscing elit</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter email address" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password" 
              required 
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          <button type="submit" className="login-button1">Login</button>
        </form>
      </div>
    </div>
  );
}

export default sigin;