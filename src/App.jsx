// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import forgotpassword from './forgotpassword';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<forgotpassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
