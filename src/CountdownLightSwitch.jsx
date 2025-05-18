import React, { useState } from 'react';
import './CountdownLightSwitch.css';

const CountdownLightSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div className={`container ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1>Countdown Timer</h1>
      <p>Time Left: 30 seconds</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button>Reset Timer</button>
    </div>
  );
};

export default CountdownLightSwitch;