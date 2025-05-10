
import React from 'react';
import '../styles/Hero.css';
import profile from '../assets/profile.png';

function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={profile} alt="Profile" className="hero-profile-pic" />
      <h1>Hi, I’m Reign</h1>
      <p> Third-year Information Technology student at Belgium Campus ITversity. I am Skilled web development, and leadership, with a commitment to personal and professional growth. Proficient in social media marketing and digital strategies through recent HubSpot certifications, seeking opportunities to apply a blend of IT and marketing skills in dynamic work environments</p>
      <div className="hero-buttons">
        <a href="#contact" className="btn">Contact Me</a>
        <a href="/Reign-CV.pdf" className="btn outline" download>Download CV</a>
      </div>
    </section>
  );
}


export default Hero;


