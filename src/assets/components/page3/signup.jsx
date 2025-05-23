import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
    const [selectedAgency, setSelectedAgency] = useState('');
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        company: ''
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
        // Save user data to localStorage
        localStorage.setItem('userData', JSON.stringify({
            fullname: formData.fullname,
            email: formData.email,
            phone: formData.phone,
            company: formData.company
        }));
        
        // Navigate to profile page
        navigate('/profile');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Create Your</h1>
                <h1>PopX account</h1>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="fullname">Full Name<span className="required-asterisk">*</span></label>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Enter full name"
                            required
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone Number<span className="required-asterisk">*</span></label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter phone number"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email Address<span className="required-asterisk">*</span></label>
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
                        <label htmlFor="password">Password<span className="required-asterisk">*</span></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="company">Company Name<span className="required-asterisk">*</span></label>
                        <input
                            type="text"
                            id="company"
                            placeholder="Enter company name"
                            required
                            value={formData.company}
                            onChange={handleChange}
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