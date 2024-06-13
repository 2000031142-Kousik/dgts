import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import cae from './assets/cae.png';
import cfd from './assets/cfd.png';
import engsrv from './assets/engsrv.png';
import estaff from './assets/estaff.jpg';
import talent from './assets/talent.png';
import trainingclasses from './assets/trainingclasses.png';
import CoursesOffered from './assets/CoursesOffered.jpg'
import virtualclasses from './assets/virtualclasses.png';
import achievementImage from './assets/achievementImage.png';
const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Corporate Trainings');
  const [expandedService, setExpandedService] = useState(null);
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setExpandedService(null);
  };

  const handleServiceClick = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <section id="Services" className="services-container">
      <h2 className="services-heading">Our Services</h2>

      <nav>
        <ul>
          <li onClick={() => handleCategoryChange('Corporate Trainings')} className={selectedCategory === 'Corporate Trainings' ? 'selected' : ''}>Corporate Trainings</li>
          <li onClick={() => handleCategoryChange('HR Solutions')} className={selectedCategory === 'HR Solutions' ? 'selected' : ''}>HR Solutions</li>
          <li onClick={() => handleCategoryChange('Engineering Services and Solutions')} className={selectedCategory === 'Engineering Services and Solutions' ? 'selected' : ''}>Engineering Services and Solutions</li>
        </ul>
      </nav>

      <div className="category-content">
        {selectedCategory === 'Corporate Trainings' && (
          <div className="corporate-trainings">
            <div className="hr-cards">
              <div className={`service-card ${expandedService === 'Training Classes' ? 'expanded' : ''}`} onClick={() => handleServiceClick('Training Classes')} style={{ backgroundImage: `url(${trainingclasses})` }}>
                <h4>Training Classes</h4>
                {expandedService === 'Training Classes' && (
                  <div className="service-details">
                    <p>know more about Training Classes</p>
                    <button onClick={() => handleRedirect('/training-classes')}>View More</button>
                  </div>
                )}
              </div>
              <div className={`service-card ${expandedService === 'Courses Offered' ? 'expanded' : ''}`} onClick={() => handleServiceClick('Courses Offered')} style={{ backgroundImage: `url(${CoursesOffered})` }}>
                <h4>Courses Offered</h4>
                {expandedService === 'Courses Offered' && (
                  <div className="service-details">
                    <p>check out Courses we  Offer</p>
                    <button onClick={() => handleRedirect('/courses-offered')}>View More</button>
                  </div>
                )}
              </div>
              <div className={`service-card ${expandedService === 'Virtual Classes' ? 'expanded' : ''}`} onClick={() => handleServiceClick('Virtual Classes')} style={{ backgroundImage: `url(${virtualclasses})` }}>
                <h4>Virtual Classes</h4>
                {expandedService === 'Virtual Classes' && (
                  <div className="service-details">
                    <p>we also provide Virtual Classes</p>
                    <button onClick={() => handleRedirect('/virtual-classes')}>View More</button>
                  </div>
                )}
              </div>
            </div>
            <div className="achievement-section">
              <div className="achievement-image">
                <img src={achievementImage} alt="Achievement" />
              </div>
              <div className="achievement-description">
                <p>We have trained 120 engineers in off-line and more than 100 engineers on various packages.</p>
              </div>
            </div>
          </div>
        )}
        {selectedCategory === 'HR Solutions' && (
          <div className="hr-solutions">
            <div className="hr-cards">
              <div className={`service-card ${expandedService === 'Executive Staffing' ? 'expanded' : ''}`} onClick={() => handleServiceClick('Executive Staffing')} style={{ backgroundImage: `url(${estaff})` }}>
                <h4>Employee Staffing</h4>
                {expandedService === 'Executive Staffing' && (
                  <div className="service-details">
                    <p>Employee Staffing</p>
                    <button onClick={() => handleRedirect('/executive-staffing')}>View More</button>
                  </div>
                )}
              </div>
              <div className={`service-card ${expandedService === 'Talent Management' ? 'expanded' : ''}`} onClick={() => handleServiceClick('Talent Management')} style={{ backgroundImage: `url(${talent})` }}>
                <h4>Manpower Supply</h4>
                {expandedService === 'Talent Management' && (
                  <div className="service-details">
                    <p>man power supply</p>
                    <button onClick={() => handleRedirect('/talent-management')}>View More</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {selectedCategory === 'Engineering Services and Solutions' && (
          <div className="engineering-services">
            <div className="hr-cards">
              <div className={`service-card ${expandedService === 'CAE Services' ? 'expanded' : ''}`} onClick={() => handleServiceClick('CAE Services')} style={{ backgroundImage: `url(${cae})` }}>
                <h4>CAE Services</h4>
                {expandedService === 'CAE Services' && (
                  <div className="service-details">
                    <p>check our CAE Services</p>
                    <button onClick={() => handleRedirect('/cae-services')}>View More</button>
                  </div>
                )}
              </div>
              <div className={`service-card ${expandedService === 'CFD Services' ? 'expanded' : ''}`} onClick={() => handleServiceClick('CFD Services')} style={{ backgroundImage: `url(${cfd})` }}>
                <h4>CFD Services</h4>
                {expandedService === 'CFD Services' && (
                  <div className="service-details">
                    <p>check our CFD Services</p>
                    <button onClick={() => handleRedirect('/cfd-services')}>View More</button>
                  </div>
                )}
              </div>
              <div className={`service-card ${expandedService === 'Engineering Services' ? 'expanded' : ''}`} onClick={() => handleServiceClick('Engineering Services')} style={{ backgroundImage: `url(${engsrv})` }}>
                <h4>Engineering Services</h4>
                {expandedService === 'Engineering Services' && (
                  <div className="service-details">
                    <p>check our Engineering Services</p>
                    <button onClick={() => handleRedirect('/engineering-services')}>View More</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
