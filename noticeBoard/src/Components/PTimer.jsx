import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setSeconds(1500);
    setIsActive(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="flex items-start justify-start p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <div className="text-6xl font-bold mb-4 animate-pulse">
          {formatTime(seconds)}
        </div>
        <button
          onClick={toggle}
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 ease-in-out mb-2"
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={reset}
          className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
