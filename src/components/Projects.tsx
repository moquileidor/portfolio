import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Hospital SSJ',
      description: 'Aplicación de gestión de citas médicas desarrollada con React y Node.js. Permite a los pacientes registrarse y solicitar citas, mientras que los administradores pueden crear, modificar y eliminar citas.',
      technologies: ['React', 'Node.js', 'Express.js', 'SQL Server'],
      image: '/HospitalSSJ.png',
      demoLink: 'https://hospital-ssj.vercel.app/'
    },
    {
      title: 'Orion',
      description: 'Plataforma web empresarial desarrollada con React que ofrece soluciones digitales personalizadas para empresas. Incluye gestión de proyectos, integración de sistemas y transformación digital.',
      technologies: ['React', 'Bootstrap', 'Node.js', 'Express.js'],
      image: '/Orion.png',
      demoLink: 'https://orion-seven-sigma.vercel.app/'
    },
    {
      title: 'Talento Tech',
      description: 'Red comunitaria donde los usuarios pueden interactuar y compartir conocimientos. Backend desarrollado en Spring Boot, probado con Postman.',
      technologies: ['Spring Boot', 'React', 'MySQL', 'Postman'],
      image: '/TalentoTech.png',
      githubLinks: {
        frontend: 'https://github.com/moquileidor/RedCampoConectaFront',
        backend: 'https://github.com/moquileidor/RedCampoConectaBack'
      }
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Proyectos</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mt-3">
                    <h6 className="text-muted">Tecnologías utilizadas:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.demoLink && (
                    <div className="mt-3">
                      <Button 
                        variant="outline-primary" 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="me-2"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                        Ver Demo
                      </Button>
                    </div>
                  )}
                  {project.githubLinks && (
                    <div className="mt-3">
                      <Button 
                        variant="outline-dark" 
                        href={project.githubLinks.frontend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="me-2"
                      >
                        <FontAwesomeIcon icon={faGithub} className="me-2" />
                        Frontend
                      </Button>
                      <Button 
                        variant="outline-dark" 
                        href={project.githubLinks.backend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} className="me-2" />
                        Backend
                      </Button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects; 