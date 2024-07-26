
import React from 'react';
import GoogleSlides from '../Components/GSlides';
import PomodoroTimer from '../Components/PTimer';
import Clock from '../Components/Clock';
import DailyQuote from '../Components/Quote';
// import HorizontalScrollBar from '../Components/HBar';
import Example from '../Components/HBarUse';
import Announcements from '../Components/Announcements';
import ChatGPTBox from '../Components/ChatGPTbox';

const HomePage = () => (
  <div>
    <div class="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 class="text-4xl font-bold text-gray-900">Digital Notice Board</h1>
    </div>
    <Example/>
    <Announcements/>
    <Clock/>
    <DailyQuote/>
    <ChatGPTBox/>

    <GoogleSlides />
    
 
  </div>
);

export default HomePage;

