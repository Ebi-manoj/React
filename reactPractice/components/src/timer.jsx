import { useEffect } from 'react';

export const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Hello');
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>Timer</div>;
};
