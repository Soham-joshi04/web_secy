// src/Login.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // Track login status

  const handleLogin = () => {
    // Simulate a login check
    if (
      rollNumber === "yourValidRollNumber" &&
      password === "yourValidPassword"
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      {" "}
      {/* Apply the "login-container" class */}
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button className="signup-link">
        <Link to="/signup">Signup</Link>
      </button>
      <button className="signup-link">
        <Link to="/forgotpassword">forgotpassword</Link>
      </button>
      {loggedIn && (
        <p className="login-success">Login successful! You're now logged in.</p>
      )}
    </div>
  );
};

export default Login;
