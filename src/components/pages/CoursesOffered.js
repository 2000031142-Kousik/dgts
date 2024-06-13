import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import cadIcon from '../assets/cadicon.png';
import feaIcon from '../assets/feaicon.png';
import './css/Coursesoffered.css';

const CoursesOffered = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Courses Offered</h1>
      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-4 position-relative">
            <img src={cadIcon} className="card-icon" alt="CAD Icon" /> {/* Add CAD icon */}
            <div className="card-body">
              <h2 className="card-title">CAD</h2>
              <p className="card-text">
                <strong>Briefing of Courses Curriculum (6 Month’s Program):</strong>
                <ul>
                  <li>Foundational Design Principles: Our curriculum delves into solid modeling, SHEETMETAL, and SURFACING concepts, ensuring a comprehensive understanding of core design fundamentals.</li>
                  <li>Proficiency in Drawing Techniques: From schematics to cabling, foam board layout to manufacturing and installation drawings, we equip students with essential drawing skills vital for various industry applications.</li>
                  <li>Precision in Product Definition: Our training emphasizes product definition, incorporating Geometric Dimensioning and Tolerancing (GD&T) standards such as ISO, ASME, ANSI, and SAE, ensuring adherence to global design norms and practices.</li>
                  <li>Strategic Modeling Approaches: Students gain expertise in modeling with a focus on design intents, fostering efficient and purpose-driven design processes.</li>
                  <li>Thorough Tolerance Analysis: We equip learners with the capability to conduct tolerance stacking analysis, a critical aspect for ensuring product functionality and reliability.</li>
                  <li>Innovative Reverse Engineering Techniques: Our curriculum explores advanced methodologies for reverse engineering automotive components, providing insights into modern manufacturing practices.</li>
                  <li>Optimized Tooling Parameters: Students acquire in-depth knowledge of tooling parameters essential for effective product design, ensuring seamless integration with manufacturing processes.</li>
                  <li>Tailored Customization Concepts: We introduce students to Knowledge-Based Engineering (KBE) principles, enabling them to develop customized solutions using cutting-edge software platforms.</li>
                  <li>Immersive Industry Experience: Through immersive experiences in manufacturing plants spanning 15 to 20 days, students gain firsthand insights into real-world production environments.</li>
                  <li>Project-Based Learning: With a focus on practical application, students engage in live projects for three months, applying theoretical knowledge to real-world scenarios and honing their skills under professional guidance.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mb-4 position-relative">
            <img src={feaIcon} className="card-icon" alt="FEA Icon" /> {/* Add FEA icon */}
            <div className="card-body">
              <h2 className="card-title">FEA</h2>
              <p className="card-text">
                <strong>Fundamentals of FEM and FEA:</strong>
                <ul>
                  <li>Gain a deep understanding of Finite Element Method (FEM) and Finite Element Analysis (FEA) principles.</li>
                  <li>Shell and Solid Modeling: Master the techniques of shell and solid modeling for comprehensive design and analysis.</li>
                  <li>1D Elements, Connections, and Contacts: Learn to work with 1D elements and establish connections and contacts in your models.</li>
                  <li>Loading Applications and Boundary Conditions: Explore various loading applications and understand the importance of boundary conditions in simulations.</li>
                  <li>Comprehensive Simulations: Engage in simulations covering crash and safety, strength and durability, NVH (Noise, Vibration, and Harshness), thermal, fluid dynamics, and airflow analysis, among others.</li>
                  <li>Post-Processing and Results Interpretation: Develop skills in post-processing and accurately interpreting simulation results.</li>
                  <li>Report Creation: Learn to create detailed and professional reports based on your analysis and simulations.</li>
                  <li>Field Experience in Manufacturing Plants: Obtain hands-on field experience in manufacturing plants, spanning 15 to 20 days.</li>
                  <li>Live Project Experience: Participate in live projects for three months, applying your knowledge to real-world challenges.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/contact" className="btn btn-primary btn-lg">Contact US</Link>
      </div>
    </div>
  );
};

export default CoursesOffered;
