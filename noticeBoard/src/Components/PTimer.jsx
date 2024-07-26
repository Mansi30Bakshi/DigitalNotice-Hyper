// src/components/PomodoroTimer.jsx
import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const WORK_TIME = 25 * 60; // 25 minutes in seconds
  const SHORT_BREAK = 5 * 60; // 5 minutes in seconds
  const LONG_BREAK = 15 * 60; // 15 minutes in seconds
  const CYCLES_BEFORE_LONG_BREAK = 4;

  const [seconds, setSeconds] = useState(WORK_TIME);
  const [isActive, setIsActive] = useState(false);
  const [isWorkMode, setIsWorkMode] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      if (isWorkMode) {
        setCycleCount((count) => count + 1);
        if (cycleCount + 1 === CYCLES_BEFORE_LONG_BREAK) {
          setSeconds(LONG_BREAK);
          setCycleCount(0);
        } else {
          setSeconds(SHORT_BREAK);
        }
      } else {
        setSeconds(WORK_TIME);
      }
      setIsWorkMode((prevMode) => !prevMode);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, isWorkMode, cycleCount]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setSeconds(WORK_TIME);
    setIsActive(false);
    setIsWorkMode(true);
    setCycleCount(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <div className="text-6xl font-bold mb-4 animate-pulse">
          {formatTime(seconds)}
        </div>
        <div className="text-lg mb-4">
          {isWorkMode ? 'Work Time' : (cycleCount === 0 ? 'Long Break' : 'Short Break')}
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
