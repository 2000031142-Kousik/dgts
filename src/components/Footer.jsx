import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock, faMapMarkerAlt,faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import ClientLogosCarousel from './ClientLogosCarousel'; // Import the client logos carousel component

const Footer = () => {
  return (
    <>
    <ClientLogosCarousel />
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: Contact Information */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faPhone} /> 
              <a href="tel:+919043632463"> +91 90436 32463</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> 
              <a href="mailto:mailto:marketing@dgts.co.in"> mailto:marketing@dgts.co.in</a>
            </p>
            <p><FontAwesomeIcon icon={faClock} /> Mon-Fri: 9 AM – 6 PM</p>
          </div>
        </div>
        
        {/* Column 2: Visit Us */}
        <div className="footer-column">
          <h3>Visit Us</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> DATTHA Global Engineering Services <br /> ECIL X Roads, Secunderabad-500083</p>
        </div>
        
        {/* Column 3: Our Services */}
        <div className="footer-column">
          <h3>Our Services</h3>
          <div className="services-columns">
            <ul>
              <li>Concept Design & Development</li>
              <li>FE modeling and Analysis</li>
              <li>Simulation & Validation</li>
              <li>Reverse Engineering  Legacy Conversion</li>
              <li>Manufacturing</li>
              
            </ul>
            <ul>
              <li>Jigs & Fixtures</li>
              <li>Tear Down and Benchmarking</li>
              <li>Prototype and Testing</li>
              <li>Corporate Training</li>
              <li>Recruitment Services</li>
            </ul>
          </div>
        </div>
        
        {/* Column 4: Industries We Serve */}
        <div className="footer-column">
          <h3>Industries We Serve</h3>
          <ul>
            <li>Automotive Industry</li>
            <li>Transportation Industry</li>
            <li>Off-Highway & Agriculture Industry</li>
            <li>Industrial Equipment’s and Machinery</li>
            <li>Energy, Oil & Gas Industry</li>
          </ul>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="follow-us">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>	

      <p class="float-end"><a href="/"><FontAwesomeIcon icon={faArrowCircleUp} size="3x" /></a></p>
    <p>&copy;  Dattha Global Technologies. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
    </>
  );
}

export default Footer;
