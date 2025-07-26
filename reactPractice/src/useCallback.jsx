import { useCallback, useState } from 'react';
import React from 'react';

export const CallBack = React.memo(() => {
  const [age, setAge] = useState(20);
  const [count, setCount] = useState(0);

  const handleIncrement = () => setAge(age + 1);
  const countIncrement = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <Title />
      <Age age={age} increment={handleIncrement} />
      <Count count={count} increment={countIncrement} />
    </div>
  );
});

export const Age = React.memo(({ age, increment }) => {
  console.log('Age component');
  return (
    <div>
      <h1>Age: {age}</h1>
      <button onClick={increment}>Inc</button>
    </div>
  );
});
export const Count = React.memo(({ count, increment }) => {
  console.log('Count component');
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Inc</button>
    </div>
  );
});

export const Title = React.memo(() => {
  console.log('Title rendered');
  return <h1>This is CallBack</h1>;
});

///////////////////////////////////////////////////////////////////
///Here we wrap components in React.memo for prevent unnecessary rendering
//Beacause whenever a state changes in all component will re render,but it avoided using react.memo causing
//only re render when props or state change ,but passing function as a prop will always create a new function
//when parent re render and makes new reference causing memo expect it changed the prop,thus we prevent it using
//useCallback
