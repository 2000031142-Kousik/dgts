import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/TrainingClasses.css'; // Import custom CSS
import { useNavigate } from 'react-router-dom';

const TrainingClasses = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/courses-offered');
  };

  return (
    <div className="container trainingclasses my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <h1 className="card-title text-center mb-4">Training Classes</h1>
              <p className="card-text">
                Our program establishes an industry standard where professionals are evaluated fairly.
              </p>
              <p className="card-text">
                Our SMEs will guide you through best-in-class learning experiences, helping you become a highly competent professional in Mechanical Design and Design Validation.
              </p>
              <p className="card-text">
                We prepare engineers to meet the requirements of MNCs for CAD/CAM/CAE and CFD-oriented jobs.
              </p>
              <p className="card-text">
                Our design practices and processes are designed to make work easy and productive.
              </p>
              <div className="text-center mt-4">
                <button className="btn btn-primary btn-lg" onClick={handleLearnMore}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingClasses;