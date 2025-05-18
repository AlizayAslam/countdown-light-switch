import React from 'react';
import './CountdownLightSwitch.css';

const CountdownLightSwitch = () => {
  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time Left: 30 seconds</p>
      <button>Toggle Theme</button>
      <button>Reset Timer</button>
    </div>
  );
};

export default CountdownLightSwitch;