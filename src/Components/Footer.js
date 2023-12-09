// Footer.js

import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <h3>Contact</h3>
        <p>Phone: +1 123 456 789</p>
        <p>Address: Garhwa, Jharkhand 22114</p>
      </div>
      <div className="social-icons">
        {/* Add your social media icons with links */}
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-your-linkedin-logo.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-your-instagram-logo.png" alt="Instagram" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-your-github-logo.png" alt="GitHub" />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
