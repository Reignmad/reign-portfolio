import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-row-fixed">
        <div className="project-card">
          <img src={project1} alt="Recipe Finder" />
          <h3>Recipe Finder Website</h3>
          <a href="https://github.com/Reignmad/Recipe-Finder.git" className="btn">Click here to visit</a>
        </div>
        <div className="project-card">
          <img src={project2} alt="MongoDB AFCON Database" />
          <h3>MongoDB AFCON Database</h3>
          <a href="https://github.com/Reignmad/Afcon-MongoDB-databasae.git" className="btn">Click here to visit</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;


