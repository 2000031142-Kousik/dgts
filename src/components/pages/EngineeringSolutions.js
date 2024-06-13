import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/engineeringsolutions.css'; // Import custom CSS

import mainImage from '../assets/engsrv.png'; // Import main image
import image1 from '../assets/es1.png'; // Import additional images
import image2 from '../assets/es2.png';
import image3 from '../assets/es3.png';
import image4 from '../assets/es4.png';
import image5 from '../assets/es5.png';
import image6 from '../assets/es6.png';

const EngineeringSolutions = () => {
  const images = [mainImage, image1, image2, image3, image4, image5, image6];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const engineeringServices = [
    {
      title: "Benchmarking Services",
      description:
        "Benchmarking services involve comparing products, processes, or services against industry benchmarks or competitors' standards. It helps in identifying strengths, weaknesses, and areas for improvement to achieve competitive advantages.",
    },
    {
      title: "Product Engineering Services",
      description:
        "Product engineering services encompass the entire product development lifecycle, from conceptualization to design, testing, and manufacturing. It aims to create innovative products that meet market demands and exceed customer expectations.",
    },
    {
      title: "Mechanical Design Services",
      description:
        "Mechanical design services focus on creating detailed mechanical designs for various components and systems. It involves CAD modeling, prototyping, and ensuring design feasibility and functionality.",
    },
    {
      title: "Mechanical Analysis Services",
      description:
        "Mechanical analysis services involve analyzing and simulating the performance of mechanical components and structures. It includes stress analysis, fatigue life prediction, and structural optimization.",
    },
    {
      title: "Product Localization Services",
      description:
        "Product localization services adapt products for specific regional or cultural requirements. It includes translation, cultural adaptation, and compliance with local regulations to effectively penetrate new markets.",
    },
    {
      title: "Modeling and Detailing Services",
      description:
        "Modeling and detailing services create detailed 3D models and technical drawings for manufacturing. It ensures accurate representation of products and components, aiding in efficient production processes.",
    },
    {
      title: "Value Analysis and Value Engineering Services",
      description:
        "Value analysis and value engineering services aim to improve the value proposition of products or processes by optimizing costs, enhancing performance, and maintaining quality standards.",
    },
    {
      title: "Tooling Design Services",
      description:
        "Tooling design services involve designing molds, dies, and fixtures for manufacturing processes. It focuses on precision, efficiency, and durability to support high-quality production.",
    },
    {
      title: "Reverse Engineering Services",
      description:
        "Reverse engineering services involve analyzing and recreating existing products or components to understand their design, functionality, and manufacturing processes. It helps in product enhancement or replication.",
    },
    {
      title: "Testing Services",
      description:
        "Testing services encompass a range of tests to validate product performance, reliability, and compliance with standards. It includes mechanical testing, environmental testing, and product certification.",
    },
    {
      title: "Manufacturing support and Process Planning",
      description:
        "Manufacturing support and process planning services assist in optimizing production processes, ensuring efficiency, quality, and cost-effectiveness in manufacturing operations.",
    },
    {
      title: "Electrical Project Engineering",
      description:
        "Electrical project engineering involves designing and managing electrical systems and projects. It includes power distribution, lighting, control systems, and ensuring compliance with electrical codes and standards.",
    },
    {
      title: "Electrical Power Distribution",
      description:
        "Electrical power distribution services focus on designing, installing, and maintaining electrical distribution systems. It ensures reliable power supply, efficiency, and safety in residential, commercial, and industrial settings.",
    },
    {
      title: "Electrical Installation Services",
      description:
        "Electrical installation services involve installing electrical components, systems, and equipment. It includes wiring, lighting, electrical panels, and ensuring adherence to electrical safety regulations.",
    },
  ];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="engineering-solutions-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <img src={images[currentImageIndex]} alt="Main Engineering Solutions Image" className="img-fluid mb-4 rounded shadow" />
            <h1 className="mb-4">Engineering Solutions</h1>
            <div className="engineering-solutions-content">
              <p>
                Our engineering solutions encompass a wide range of services aimed at addressing complex challenges and 
                delivering innovative solutions across various industries. From product engineering to mechanical design, 
                electrical project engineering, and more, we are committed to driving excellence and efficiency in every 
                project we undertake.
              </p>
              <p>
                At DGTS, we leverage cutting-edge technologies and deep industry expertise to support our clients' 
                engineering needs. Whether it's developing new products, optimizing manufacturing processes, or enhancing 
                electrical systems, our comprehensive engineering solutions are tailored to meet the highest standards of 
                quality and performance.
              </p>
            </div>
            <div className="engineering-solutions-points">
              <h2>Engineering Services:</h2>
              <ul>
                {engineeringServices.map((service, index) => (
                  <li key={index} className="key-point" onClick={() => handleImageClick(index)}>
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="key-point-details">
              <h3>{engineeringServices[currentImageIndex].title}</h3>
              <p>{engineeringServices[currentImageIndex].description}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              {images.map((image, index) => (
                <div className="col-sm-6 mb-4" key={index}>
                  <div className="img-container" onClick={() => handleImageClick(index)}>
                    <img src={image} alt={`Engineering Solutions Image ${index}`} className="img-fluid rounded shadow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/cae-services" className="btn btn-primary mx-3">CAE Services</Link>
        <Link to="/services" className="btn btn-primary mx-3">Services</Link>
        <Link to="/cfd-services" className="btn btn-primary mx-3">CFD Services</Link>
      </div>
    </div>
  );
};

export default EngineeringSolutions;
