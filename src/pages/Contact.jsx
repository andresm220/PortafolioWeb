import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contacto</h1>
      
      <div className="contact-info">
        <h2>Puedes contactarme a través de:</h2>
        
        <div className="contact-method">
          <h3>Correo Electrónico:</h3>
          <a href="mailto:aame2208@gmail.com" className="contact-link">
            aame2208@gmail.com
          </a>
        </div>
        
        <div className="contact-method">
          <h3>GitHub:</h3>
          <a 
            href="https://github.com/andresm220" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            github.com/andresm220
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;