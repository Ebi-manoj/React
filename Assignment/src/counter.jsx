import { useEffect, useState } from 'react';
import { ProfileCard } from './profile';

export const Counter = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count == 0) return;
    setCount(count - 1);
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${count}`
        );
        if (!response.ok) throw new Error('No user Found');
        const data = await response.json();
        setError(null);
        setUser(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };
    fetchUser();
  }, [count]);

  return (
    <div id="counter">
      <h2>{count}</h2>
      <div id="buttons">
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
      {!user && <h1>Loading</h1>}
      {error && <h1 id="error">{error}</h1>}
      {!error && user && <ProfileCard data={user} />}
    </div>
  );
};
