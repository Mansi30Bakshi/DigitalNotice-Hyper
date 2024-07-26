// src/pages/HomePage.jsx
import React from 'react';
import GoogleSlides from '../Components/GSlides';
import PomodoroTimer from '../Components/PTimer';
import Clock from '../Components/Clock';
import DailyQuote from '../Components/Quote';
// import HorizontalScrollBar from '../Components/HBar';
import Example from '../Components/HBarUse';

const HomePage = () => (
  <div>
    <h1>Digital Notice Board</h1>
    <Example/>
    <Clock/>
    <DailyQuote/>

    <GoogleSlides />
    {/* Render other optional widgets */}
  </div>
);

export default HomePage;
