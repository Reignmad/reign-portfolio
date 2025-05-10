import React from 'react';
import '../styles/About.css';
import htmlIcon from '../assets/icons8-html.svg';
import cssIcon from '../assets/icons8-css.svg';
import jsIcon from '../assets/icons8-javascript.svg';
import reactIcon from '../assets/icons8-react.svg';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      
      <div className="skills">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div>
            <h4>Languages</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <ul>
              <li>Visual Studio Code</li>
              <li>Figma</li>
              <li>Power BI</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h4>Frameworks</h4>
            <ul>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div>
            <h4>Other</h4>
            <ul>
              <li>Software Testing</li>
            </ul>
          </div>
        </div>
      </div>

      <p>I'm a web developer and aspiring data scientist passionate about creating engaging web experiences and working with databases. 

I'm proficient in front-end development and database SQL. 

I develop responsive websites and am dedicated to helping clients establish a strong online presence. I am always striving to learn about the newest technologies and frameworks</p>


      <div className="experience-with">
        <h3>Experience With</h3>
        <div className="experience-icons">
          <img src={htmlIcon} alt="HTML" />
          <img src={cssIcon} alt="CSS" />
          <img src={jsIcon} alt="JavaScript" />
          <img src={reactIcon} alt="React" />
        </div>
      </div>
    </section>
  );
}

export default About;