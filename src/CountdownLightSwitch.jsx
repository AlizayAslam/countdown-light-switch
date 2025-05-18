import React, { useState, useEffect } from 'react';
import './CountdownLightSwitch.css';

const CountdownLightSwitch = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsDarkTheme((prev) => !prev);
      setTimeLeft(30);
    }
  }, [timeLeft]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const resetTimer = () => {
    setTimeLeft(30);
    setIsDarkTheme(false);
  };

  const progress = ((30 - timeLeft) / 30) * 100;

  return (
    <div className={`container ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1>Countdown Timer</h1>
      <p>Time Left: {timeLeft} seconds</p>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      {timeLeft === 0 && <p>Time's Up!</p>}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default CountdownLightSwitch;