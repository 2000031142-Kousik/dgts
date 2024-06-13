import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/cfd.css'; // Import custom CSS

import mainImage from '../assets/cfd.png'; // Import main image
import image1 from '../assets/cfd1.png'; // Import additional images
import image2 from '../assets/cfd2.png';
import image3 from '../assets/cfd3.png';
import image4 from '../assets/cfd4.png';
import image5 from '../assets/cfd5.png';
import image6 from '../assets/cfd6.png';

const CFD = () => {
  const images = [mainImage, image1, image2, image3, image4, image5, image6];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const cfdServices = [
    {
      title: "Converting physical problem into closed numerical simulation",
      description:
        "CFD (Computational Fluid Dynamics) allows for the conversion of physical problems involving fluid flow and heat transfer into numerical simulations. This enables engineers to analyze and optimize designs without physical prototypes, saving time and costs.",
    },
    {
      title: "Thermal analysis for Motors, Generators, switch gears and industrial appliances",
      description:
        "CFD is utilized to perform detailed thermal analysis for various industrial equipment such as motors, generators, switch gears, and industrial appliances. It predicts temperature distribution and heat transfer, ensuring optimal thermal management and reliability.",
    },
    {
      title: "Simulation of multiphase flows and making use of UDF for specific requirements",
      description:
        "Multiphase flow simulation in CFD involves modeling flows with multiple phases (liquid-gas, solid-liquid, etc.). User-Defined Functions (UDFs) allow customization of models to meet specific requirements, enhancing accuracy and versatility.",
    },
    {
      title: "3D battery modelling",
      description:
        "CFD is employed for 3D modeling of batteries to analyze thermal management, airflow distribution, and electrochemical processes. This aids in optimizing battery design for improved performance and longevity.",
    },
    {
      title: "Combustion and species transport in automotive and process industry",
      description:
        "CFD simulations are crucial for analyzing combustion processes and species transport in automotive engines and industrial processes. It enables engineers to optimize combustion efficiency, emissions, and process performance.",
    },
    {
      title: "Additional Information Placeholder",
      description:
        "Additional Information Placeholder",
    },
  ];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="cfd-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <img src={images[currentImageIndex]} alt="Main CFD Image" className="img-fluid mb-4 rounded shadow" />
            <h1 className="mb-4">Computational Fluid Dynamics (CFD) Services</h1>
            <div className="cfd-content">
              <p>
                Computational Fluid Dynamics (CFD) is a numerical method used to analyze fluid flow and heat transfer 
                problems. It involves simulating the behavior of fluids and their interaction with structures using 
                mathematical models and computer software. CFD plays a vital role in various industries such as 
                automotive, aerospace, energy, and manufacturing by providing insights into fluid dynamics, thermal 
                management, and optimization of designs.
              </p>
              <p>
                At DGTS, we offer comprehensive CFD services tailored to meet the specific needs of industries. Our 
                expertise includes simulations of multiphase flows, thermal analysis for various applications, combustion 
                processes, and more. By leveraging advanced CFD techniques and tools, we help clients optimize product 
                performance, enhance efficiency, and reduce development costs.
              </p>
            </div>
            <div className="cfd-points">
              <h2>CFD Services:</h2>
              <ul>
                {cfdServices.map((service, index) => (
                  <li key={index} className="key-point" onClick={() => handleImageClick(index)}>
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="key-point-details">
              <h3>{cfdServices[currentImageIndex].title}</h3>
              <p>{cfdServices[currentImageIndex].description}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              {images.map((image, index) => (
                <div className="col-sm-6 mb-4" key={index}>
                  <div className="img-container" onClick={() => handleImageClick(index)}>
                    <img src={image} alt={`CFD Image ${index}`} className="img-fluid rounded shadow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/cae-services" className="btn btn-primary mx-3">CAE Services</Link>
        <Link to="/engineering-services" className="btn btn-primary mx-3">Engineering Services</Link>
        <Link to="/services" className="btn btn-primary mx-3">Services</Link>
      </div>
    </div>
  );
};

export default CFD;
