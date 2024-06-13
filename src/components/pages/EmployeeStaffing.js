import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/EmployeeStaffing.css'; // Import custom CSS

const EmployeeStaffing = () => {
  return (
    <div className="employee-staffing-bg">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="content p-5 bg-white rounded shadow">
              <h1 className="mb-4 text-primary">Join Our Team</h1>
              <p className="lead text-dark">
                Finding and retaining exceptional engineering talent is becoming an enormous challenge in the rapidly evolving industry.
              </p>
              <p className="text-dark">
                Trained and tested professionals are crucial to bridging this gap, and DGTS excels in providing such resources.
              </p>
              <p className="text-dark">
                Companies invest significantly in software; thus, it is imperative to have the right talent to maximize these tools and deliver outstanding results.
              </p>
              <p className="text-dark">
                Recognizing this need, we offer comprehensive training on various software related to CAD and CAE/CFD domains.
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

export default EmployeeStaffing;
