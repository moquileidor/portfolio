import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold">Jorge Luis Alvarado Cuesta</h1>
            <p className="lead text-muted">Estudiante de Ingeniería de Software</p>
            <p className="mb-4">"Apasionado por la tecnología y la creación de soluciones funcionales."</p>
            
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default Home; 