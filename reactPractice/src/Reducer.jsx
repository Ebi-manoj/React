import { useReducer } from 'react';
import { Header } from '../../memo/src/App';

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    case 'reset':
      return initialValue;
  }
};

export const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  console.log(dispatch);
  return (
    <div>
      <Header />
      <h1>This is useReduce Practice</h1>
      <h3>Count :{count}</h3>
      <button onClick={() => dispatch('inc')}>Inc</button>
      <button onClick={() => dispatch('dec')}>Dec</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

const initialState = {
  counter: 0,
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case 'inc':
      return { counter: state.counter + action.value };
    case 'dec':
      return { counter: state.counter - action.value };
    case 'reset':
      return { counter: 0 };
  }
};

export const Reducer2 = () => {
  const [count, dispatch] = useReducer(reducer2, initialState);
  return (
    <div>
      <h2>count:{count.counter}</h2>
      <button onClick={() => dispatch({ type: 'inc', value: 1 })}>Inc</button>
      <button onClick={() => dispatch({ type: 'dec', value: 1 })}>Dec</button>
      <button onClick={() => dispatch({ type: 'inc', value: 5 })}>Inc+5</button>
      <button onClick={() => dispatch({ type: 'dec', value: 5 })}>
        Dec -5
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};
