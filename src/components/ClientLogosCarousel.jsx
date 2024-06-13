import React from 'react';
import './ClientLogosCarousel.css';
import cizmak from './assets/cizmak.png'; // Import client logo images
import jses from './assets/jses.png';
import clientLogoZ from './assets/solitude.png';
import motherson from './assets/motherson.png';

const ClientLogosCarousel = () => {
  const clientLogos = [cizmak, jses, clientLogoZ,motherson,cizmak, jses, clientLogoZ,motherson];

  return (
    <div className="client-logos-carousel-container">
      <h2>Our Clients</h2>
      <div className="client-logos-carousel">
        <div className="carousel-track">
          {clientLogos.concat(clientLogos).map((logo, index) => (
            <img key={index} src={logo} alt={`Client ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogosCarousel;