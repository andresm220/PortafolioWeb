import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Ver código
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Ver en vivo
          </a>
        )}
        <Link to={`/projects/${project.id}`}>Más detalles</Link>
      </div>
    </div>
  );
};

export default ProjectCard;