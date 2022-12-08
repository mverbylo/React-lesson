import React from 'react';
import { useState, useEffect } from 'react';
const HookTimer = () => {
  // const [state, setstate] = useState({ count: 0, startingNumber: 0 });
  const [startingNumber, setStartingNumber] = useState(10);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // useEffect(function effect() {
  //   console.log('useEffect');
  //   let intervalId = setInterval(tick, 1000);
  //   return function cleanup() {
  //     console.log('Will unmount');
  //     clearInterval(intervalId);
  //   };
  // });

  // useEffect(function effect() {
  //   console.log('useEffect');
  //   document.addEventListener('click', handleClick);
  //   return function cleanup() {
  //     console.log('Will unmount');
  //     document.removeEventListener('click', handleClick);
  //   };
  // });
  // const handleClick = () => {
  //   console.log('Click');
  // };
  useEffect(() => start(), []); //Did mount

  const handleChange = (e) => {
    setStartingNumber(+e.target.value);
  };

  const start = () => {
    if (!isStarted) {
      setIsStarted(true);
      setCurrentNumber(startingNumber);
      setIntervalId(setInterval(tick, 100));
    }
  };

  const stop = () => {
    clearInterval(intervalId);
    setIsStarted(false);
  };

  const tick = () => {
    setCurrentNumber((oldCurrentNumber) => oldCurrentNumber - 1);
  };

  return (
    <div>
      <p>Starting number: {startingNumber}</p>
      <p>Current number: {currentNumber}</p>
      <input onChange={handleChange} value={startingNumber} type="text" />
      <button onClick={start}>Start Timer</button>
      <button onClick={stop}>Stop Timer</button>
    </div>
  );
};

export default HookTimer;
