import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/cae.css'; // Import custom CSS
import mainImage from '../assets/cae.png'; // Import main image
import image1 from '../assets/cae1.png'; // Import additional images
import image2 from '../assets/cae2.png';
import image3 from '../assets/cae3.png';
import image4 from '../assets/cae4.png';
import image5 from '../assets/cae5.png';
import image6 from '../assets/cae6.png';
import image7 from '../assets/cae7.png';
import image8 from '../assets/cae8.png';

const CAE = () => {
  const images = [mainImage, image1, image2, image3, image4, image5, image6, image7, image8];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedKeyPoint, setSelectedKeyPoint] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const keyPoints = [
    {
      title: '2D and 3D FE Modeling',
      description:
        'Enables engineers to create detailed digital prototypes of products or components, evaluating their performance under various conditions before manufacturing.',
    },
    {
      title: 'Linear, Non-Linear Structural Analysis',
      description:
        'Evaluates the response of structures to applied loads, considering material non-linearities and geometric complexities to ensure structural integrity.',
    },
    {
      title: 'Static and Dynamic Analysis',
      description:
        'Static analysis predicts the behavior of structures under steady loads, while dynamic analysis assesses response to time-varying forces such as vibrations and impacts.',
    },
    {
      title: 'Fatigue & Durability',
      description:
        'Predicts the lifespan of components subjected to repeated loading, ensuring they withstand operational conditions without failure.',
    },
    {
      title: 'Crash Analysis',
      description:
        'Simulates vehicle or structural collisions to assess safety and structural integrity, critical in automotive and aerospace industries.',
    },
  ];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleKeyPointClick = (index) => {
    setSelectedKeyPoint(keyPoints[index]);
  };

  return (
    <div className="cae-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <img src={images[currentImageIndex]} alt="Main CAE Image" className="img-fluid mb-4 rounded shadow" />
            <h1 className="mb-4">Computer-Aided Engineering (CAE)</h1>
            <div className="cae-content">
              <p>
                Computer-Aided Engineering (CAE) uses simulation software to analyze and optimize product designs.
                It allows engineers to predict product performance and behavior under real-world conditions without
                physical prototyping, saving time and costs.
              </p>
              <p>
                CAE encompasses various analysis techniques such as structural analysis, dynamic analysis, thermal
                analysis, fluid dynamics (CFD), and electromagnetic analysis. These tools are crucial in industries
                like automotive, aerospace, and mechanical engineering for improving product quality, innovation,
                and risk mitigation.
              </p>
              <p>
                By integrating with CAD software, CAE facilitates iterative design improvements, ensures
                compliance with safety standards, and supports complex simulations like crash analysis and
                aerodynamics.
              </p>
            </div>
            <div className="cae-points">
              <h2>Key Points:</h2>
              <ul>
                {keyPoints.map((point, index) => (
                  <li key={index} onClick={() => handleKeyPointClick(index)} className="key-point">
                    {point.title}
                  </li>
                ))}
              </ul>
            </div>
            {selectedKeyPoint && (
              <div className="key-point-details">
                <h3>{selectedKeyPoint.title}</h3>
                <p>{selectedKeyPoint.description}</p>
              </div>
            )}
             <div className="text-center mt-4">
        <Link to="/cfd-services" className="btn btn-primary mx-3">CAE Services</Link>
        <Link to="/engineering-services" className="btn btn-primary mx-3">Engineering Services</Link>
        <Link to="/services" className="btn btn-primary mx-3">Services</Link>
      </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              {images.map((image, index) => (
                <div className="col-sm-6 mb-4" key={index}>
                  <div className="img-container" onClick={() => handleImageClick(index)}>
                    <img src={image} alt={`CAE Image ${index}`} className="img-fluid rounded shadow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAE;
