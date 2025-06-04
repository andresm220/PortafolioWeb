import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>Sobre Mí</h1>
      <section className="bio">
        <h2>Andrés Mazariegos</h2>
        <p>
          Desarrollador web con experiencia en React, JavaScript y tecnologías frontend.
          Apasionado por crear aplicaciones web interactivas y responsivas.
        </p>
      </section>
      <section className="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
};

export default About;