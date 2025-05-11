import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/Logo-purple.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">Reign</span>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
