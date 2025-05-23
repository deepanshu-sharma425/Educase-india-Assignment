import React from 'react';
import { Link } from 'react-router-dom';
import './signin.css'; 
function sigin() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Signin to your </h1>
        <h1>PopX account</h1>
        <p className="login-subtext">Lorem ipsum dolor sit amet</p>
        <p className="login-subtext1">consectetur adipiscing elit</p>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter email address" 
              required 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password" 
              required 
            />
          </div>
          
          <button type="submit" className="login-button1">Login</button>
        </form>
        
        
      </div>
    </div>
  );
}

export default sigin;