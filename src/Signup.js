// src/Signup.js

import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>
      {/* Add signup form */}
      <button><Link to="/">Go to Login</Link></button>
    </div>
  );
};

export default Signup;
