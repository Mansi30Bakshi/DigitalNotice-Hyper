// src/components/HomePage.jsx
import React from 'react';
import GoogleSlides from '../Components/GSlides';
import PomodoroTimer from '../Components/PTimer';
import Clock from '../Components/Clock';
import DailyQuote from '../Components/Quote';
// import HorizontalScrollBar from '../Components/HBar';
import Example from '../Components/HBarUse';
import Announcements from '../Components/Announcements';
import ChatGPTBox from '../Components/ChatGPTbox';
import MusicWidgets from '../Components/MusicWidget';
import GoogleMeetWidget from '../Components/GMeet';
import HealthTrackerWidget from '../Components/HealthTracking';

const HomePage = () => (
  <div className="homepage-container p-10">
    <div className="header bg-white p-8 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Digital Notice Board</h1>
    </div>
    
    <Announcements />
   
    <div className="dashboard-container flex flex-wrap space-x-15 space-y-0 items-start gap-20 mb-8">
      <div className='clock-timer flex-row'>
      <Clock />
      <DailyQuote />
      </div>
      <MusicWidgets />
      <GoogleMeetWidget />
      <HealthTrackerWidget />
    </div>



    <div className="dashboard-container flex flex-row space-x-15 space-y-0 items-start gap-4 mb-8 margin-left 15">
      
      <ChatGPTBox />
      <GoogleSlides />

    </div>
  </div>
);

export default HomePage;
