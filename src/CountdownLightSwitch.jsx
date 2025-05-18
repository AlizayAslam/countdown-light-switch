import React, { useState, useEffect } from 'react';
import './CountdownLightSwitch.css';

const CountdownLightSwitch = () => {
  // State for the timer and theme
  const [timeLeft, setTimeLeft] = useState(30);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Timer logic
  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsDarkTheme((prev) => !prev); // Toggle theme when timer reaches zero
      setIsTimerRunning(false); // Stop the timer
    }
  }, [isTimerRunning, timeLeft]);

  // Start the timer
  const startTimer = () => {
    if (!isTimerRunning && timeLeft > 0) {
      setIsTimerRunning(true);
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  // Reset the timer
  const resetTimer = () => {
    setTimeLeft(30);
    setIsDarkTheme(false);
    setIsTimerRunning(false);
  };

  // Calculate progress bar width
  const progress = ((30 - timeLeft) / 30) * 100;

  return (
    <div className={`container ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="header">
        <h1>Countdown & Light Switch</h1>
        <div className="toggle-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={!isDarkTheme}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
          <span className="toggle-label">Light Mode</span>
        </div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="timer">{timeLeft}s</p>
      {timeLeft === 0 && <p className="times-up">Time's Up!</p>}
      <button className="start-button" onClick={startTimer}>
        Start Timer
      </button>
      <button className="reset-button" onClick={resetTimer}>
        Reset Timer
      </button>
    </div>
  );
};

export default CountdownLightSwitch;