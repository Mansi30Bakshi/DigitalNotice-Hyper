
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
  <div>
    <div class="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 class="text-4xl font-bold text-gray-900">Digital Notice Board</h1>
    </div>
    <Example/>
    <Announcements/>
    <Clock/>
    <DailyQuote/>
    <MusicWidgets/>
    <HealthTrackerWidget/>
    <GoogleMeetWidget/>
    <ChatGPTBox/>
    
    <GoogleSlides />
    
 
  </div>
);

export default HomePage;

