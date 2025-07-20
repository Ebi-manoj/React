import { useRef, useState } from 'react';

export const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  function startTimer() {
    ref.current = setInterval(() => {
      console.log('hai');
      setCount(prev => prev + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(ref.current);
  }
  function clearTimer() {
    stopTimer();
    setCount(0);
  }
  return (
    <div id="stopwatch">
      <h2>{count}</h2>
      <div id="controlls">
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={clearTimer}>clear</button>
      </div>
    </div>
  );
};
