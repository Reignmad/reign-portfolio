
import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/Logo-purple.png';
import linkedin from '../assets/icons8-linkedin.svg';
import github from '../assets/icons8-github.svg';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p className="footer-email">reignwebs@gmail.com</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/oabusa-madubung-7897032a4/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Reignmad" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
      </div>
      <p>&copy; 2025 Reign. All rights reserved.</p>
    </footer>
  );
}

export default Footer;