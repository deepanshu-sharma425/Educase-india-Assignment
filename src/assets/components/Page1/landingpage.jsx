import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css';

function Landingpage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="maindiv">
        <div className="aboutmaindiv">
          <h1>Welcome to PoPX</h1>
          <p>Lorem ipsum dolor sit amet</p>
          <p>consectetur adipisicing elit.</p>
          <button 
            className='createaccount'
            onClick={() => navigate('/sigin')}
          >
            Create Account
          </button>
          <button 
            className="already"
            onClick={() => navigate('/sigin')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Landingpage;