import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
      <div className="social-links">
        <a href="https://github.com/andresm220" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;