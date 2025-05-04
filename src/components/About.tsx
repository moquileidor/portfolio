import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Sobre Mí</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center">
              <p className="lead mb-4">
                ¡Hola! Soy Jorge Luis Alvarado Cuesta, un estudiante de Ingeniería de Software apasionado por el desarrollo web y la creación de soluciones tecnológicas innovadoras.
              </p>
              <p className="mb-4">
                Actualmente estoy cursando mis estudios en el Tecnologico de Antioquia, donde he adquirido conocimientos sólidos en programación, bases de datos y desarrollo de software.
              </p>
              <p className="mb-4">
                Mi objetivo es seguir creciendo profesionalmente, aprendiendo nuevas tecnologías y contribuyendo a proyectos que generen un impacto positivo en la sociedad.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 
