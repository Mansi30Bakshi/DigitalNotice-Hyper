// src/pages/HomePage.jsx
import React from 'react';
import GoogleSlides from '../Components/GSlides';
import PomodoroTimer from '../Components/PTimer';

const HomePage = () => (
  <div>
    <h1>Digital Notice Board</h1>
    <GoogleSlides />
    <PomodoroTimer />
    {/* Render other optional widgets */}
  </div>
);

export default HomePage;
