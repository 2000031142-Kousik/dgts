import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './css/VirtualClasses.css'; // Import custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const VirtualClasses = () => {
  const navigate = useNavigate(); // Define useNavigate

  const handleLearnMore = () => {
    navigate('/courses-offered');
  };

  return (
    <div className="container virtualclasses my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <h1 className="card-title text-center mb-4">Virtual Classes</h1>
              <p className="card-text">
                "Regardless of your global location, we have streamlined the process for accessing top-tier training."
              </p>
              <p className="card-text">
                "Our sessions are meticulously designed with small cohorts in mind, fostering meaningful interaction between students and instructors, as well as promoting collaborative learning among peers."
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

export default VirtualClasses;
