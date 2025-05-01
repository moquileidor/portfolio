import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Skills: React.FC = () => {
  const skills = {
    languages: ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    frameworks: ['React', 'Spring Boot', 'Express.js', 'Bootstrap'],
    databases: ['SQL Server'],
    tools: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'Cursor IDE'],
    testing: ['Pruebas de caja negra', 'Cobertura de sentencias', 'Cobertura de decisiones', 'Cobertura de condiciones']
  };

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Habilidades</h2>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Lenguajes de Programación</Card.Title>
                <ul className="list-unstyled">
                  {skills.languages.map((skill, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-check text-primary me-2"></i>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Frameworks y Librerías</Card.Title>
                <ul className="list-unstyled">
                  {skills.frameworks.map((skill, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-check text-primary me-2"></i>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Bases de Datos</Card.Title>
                <ul className="list-unstyled">
                  {skills.databases.map((skill, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-check text-primary me-2"></i>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Herramientas</Card.Title>
                <ul className="list-unstyled">
                  {skills.tools.map((skill, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-check text-primary me-2"></i>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Pruebas de Software</Card.Title>
                <ul className="list-unstyled">
                  {skills.testing.map((skill, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-check text-primary me-2"></i>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills; 