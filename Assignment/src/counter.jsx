import { useState } from 'react';

export const Counter = () => {
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count == 0) return;
    setCount(count - 1);
  }

  const [count, setCount] = useState(0);
  return (
    <div id="counter">
      <h2>{count}</h2>
      <div id="buttons">
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};
