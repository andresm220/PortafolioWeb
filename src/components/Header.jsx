import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Mi Portafolio</Link>
      </div>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;