import React from 'react';
import visionImage from '../assets/vision.jpg';

const Vision = () => {
  return (
    <div>
      <h2>Vision</h2>
      <img src={visionImage} alt="Vision" width="500" height="500" />
      <p>Here goes the content for the Vision page...</p>
    </div>
  );
}

export default Vision;