import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const formatDate = (date) => {
    const options = {  year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  const formatDay = (date) => {
    const options = { weekday: 'long' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col items-left justify-center ml-8 mt-8">
      <div className="bg-purple-100 p-6 rounded-lg shadow-xl text-center w-80 ">

        <div className="text-4xl font-semibold mb-2 text-pink-500">
          {formatDate(currentTime)}
        </div>
        <div className="text-6xl font-bold mb-4 ">
          {formatTime(currentTime)}
        </div>
<div className="text-4xl font-medium mb-2 text-pink-500">
        {formatDay(currentTime)}
      </div>
      </div>
    </div>
  );
};



export default Clock;
