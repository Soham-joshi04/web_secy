// src/Signup.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <div className="signup-form">
        <input type="text" placeholder="Roll No." />
        <input type="text" placeholder="Mobile No." />
        <input type="text" placeholder="Password" />
        <input type="submit" value="Submit" />
        <button>
          <Link to="/">Go to Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;