import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenido a mi Portafolio</h1>
        <p>Desarrollador web con experiencia en React y tecnologías frontend</p>
        <Link to="/projects" className="cta-button">
          Ver mis proyectos
        </Link>
      </section>
      <section className="featured-projects">
      
      </section>
    </div>
  );
};

export default Home;