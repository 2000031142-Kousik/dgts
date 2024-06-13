// Mission.js
import React from 'react';
import missionImage from '../assets/mission.jpg';

const Mission = () => {
  return (
    <div>
      <h2>Mission</h2>
      <img src={missionImage} alt="Mission" width="500" height="500" />
      <p>Here goes the content for the Mission page...</p>
    </div>
  );
}

export default Mission;
