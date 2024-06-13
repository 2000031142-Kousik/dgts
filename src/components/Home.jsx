import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import homeslide from './assets/Design Engineering.jpg';
import image1 from './assets/Simulation and Validation.jpg';
import image2 from './assets/Manufacturing and Testing.jpg';
import companyslide from './assets/company.png';
// src/components/Home.js

const Home = () => {
  return (
    <section id="home" className="home container">
      <Carousel controls={true} indicators={false} className="slideshow-container">
      <Carousel.Item>
          <img className="d-block w-100" src={companyslide} alt="companyslide" />
          <div className="carousel-caption">
            <h1>Welcome</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={homeslide} alt="Design Engineering" />
          <div className="carousel-caption text-start">
            <h1>Design Engineering</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Simulation and Validation" />
          <div className="carousel-caption">
            <h1>Simulation and Validation</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Manufacturing and Testing" />
          <div className="carousel-caption">
            <h1>Manufacturing and Testing</h1>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Home;
