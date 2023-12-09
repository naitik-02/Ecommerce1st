// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/path-to-your-logo.png" alt="GreenMart" className="logo" />
        <span className="online">online</span>
      </div>
      <div className="menu">
        <a href="/">Home</a>
        <div className="dropdown">
          <button className="dropbtn">Products</button>
          <div className="dropdown-content">
            <a href="/shoes">Shoes</a>
            <a href="/tshirts">T-Shirts</a>
            <a href="/watches">Watches</a>
            <a href="/jeans">Jeans</a>
          </div>
        </div>
        <a href="/about">About Us</a>
      </div>
      <div className="auth-links">
        <a href="/login" className="auth-link">Login</a>
        <a href="/signup" className="auth-link">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
