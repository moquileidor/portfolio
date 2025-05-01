import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_USER_ID'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Contacto</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </Form>

                {status === 'success' && (
                  <Alert variant="success" className="mt-3">
                    ¡Mensaje enviado con éxito!
                  </Alert>
                )}
                {status === 'error' && (
                  <Alert variant="danger" className="mt-3">
                    Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                  </Alert>
                )}

                <div className="mt-4 text-center">
                  <h5 className="mb-3">Encuéntrame en:</h5>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="https://github.com/moquileidor" target="_blank" rel="noopener noreferrer" className="text-dark">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/jorge-luis-alvarado-cuesta-2562371ba/" target="_blank" rel="noopener noreferrer" className="text-dark">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="mailto:jorgealvarado@gmail.com" className="text-dark">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 