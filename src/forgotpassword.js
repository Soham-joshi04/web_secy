// src/Signup.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return ( <div className="App">
  <h1>Forgot Password</h1>
  <input
    type="text"
    placeholder="Enter Mobile Number"
  />
  <button>Send OTP</button>
  <button>
    <Link to="/">Go to Login</Link>
  </button>
</div>
  );
};

export default ForgotPassword;
