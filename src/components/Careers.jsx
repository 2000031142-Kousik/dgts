import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Careers.css';
import careers from './assets/careers.png';

const Careers = () => {
  return (
    <section id="careers" className="careers">
    <div className="careers-container">
      <Container fluid>
        <Row className="h-100">
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <h1>LOOKING FOR A CAREER BOOST  LOOK NO FURTHER</h1>
              <p>
                At Dattha Global Engineering Services, we are looking for dynamic, hard working and ready to learn candidates for being part of our team. We are a growing company and we are looking at competent and consistent performers.
              </p>
              <p>If you have suitable qualifications, then apply today for the following vacancies:</p>
              <ul>
                <li>CAD Design Engineer</li>
                <li>3D Simulation Engineer</li>
                <li>Virtual Validation Analyst</li>
              </ul>
              <p>Drop us a mail with your complete and updated CV/Resume at <a href="mailto:marketing@dgts.co.in">marketing@dgts.co.in</a></p>
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="image-container">
              <img src={careers} alt="Image of person about to find employment" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </section>
  );
}

export default Careers;
