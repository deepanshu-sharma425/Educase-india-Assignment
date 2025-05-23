import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

function Signup() {
    const [selectedAgency, setSelectedAgency] = useState('');

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Create Your</h1>
                <h1>PopX account</h1>


                <form className="login-form">
                    <div className="input-group">
                        <label htmlFor="fullname">Full Name<span className="required-asterisk">*</span></label>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Enter full name"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone Number<span className="required-asterisk">*</span></label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter phone number"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email Address<span className="required-asterisk">*</span></label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email address"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password<span className="required-asterisk">*</span></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="company">Company Name<span className="required-asterisk">*</span></label>
                        <input
                            type="text"
                            id="company"
                            placeholder="Enter company name"
                            required
                        />
                    </div>

                    <div className="agency-selection">
                        <label className="agency-question">
                            Are you an Agency?<span className="required-asterisk">*</span>
                        </label>
                        <div className="agency-options">
                            <label className="option">
                                <input 
                                    type="radio" 
                                    name="agency" 
                                    value="yes"
                                    checked={selectedAgency === 'yes'}
                                    onChange={() => setSelectedAgency('yes')}
                                />
                                <span className="custom-radio"></span>
                                <span className="option-label">Yes</span>
                            </label>
                            <label className="option">
                                <input 
                                    type="radio" 
                                    name="agency" 
                                    value="no"
                                    checked={selectedAgency === 'no'}
                                    onChange={() => setSelectedAgency('no')}
                                />
                                <span className="custom-radio"></span>
                                <span className="option-label">No</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="login-button">Create Account</button>
                </form>


            </div>
        </div>
    );
}

export default Signup;