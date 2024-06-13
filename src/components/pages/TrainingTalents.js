import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/TalentTraining.css'; // Import custom CSS

const TrainingTalents = () => {
  return (
    <div className="training-talents-bg">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="content p-5 bg-white rounded shadow">
              <h1 className="mb-4 text-primary">Training Talents</h1>
              <p className="lead text-dark">
                Searching for talent with the necessary skills is often time-consuming and costly.
              </p>
              <p className="text-dark">
                DGTS alleviates this burden by not only offering trained resources but also conducting a rigorous screening process to ensure the best fit for your needs.
              </p>
              <p className="text-dark">
                We provide bespoke training programs, tailored to train specific resources on specific software, preparing them to meet your exact requirements.
              </p>
              <p className="text-dark">
                Our engineering training and recruitment teams consist of experts who have delivered thousands of design and evaluation solutions and have extensive experience in real-time hiring processes.
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="card hiring-card shadow-lg">
              <div className="card-body p-4">
                <h2 className="card-title text-center mb-4">Contact US</h2>
                <p className="card-text text-center text-dark">Join our team and become a part of our journey towards excellence.</p>
                <div className="text-center mt-4">
                  <a href="/contact" className="btn btn-primary btn-lg">contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingTalents;
