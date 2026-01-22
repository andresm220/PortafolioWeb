import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p className="description">{project.description}</p>
      
      <div className="technologies">
        <h3>Tecnologías utilizadas:</h3>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-button">
            Ver código en GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-button">
            Ver proyecto en vivo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;