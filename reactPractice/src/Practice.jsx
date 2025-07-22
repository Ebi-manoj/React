import { useEffect, useRef, useState } from 'react';

// export const Input = () => {
//   const inputRef = useRef(null);
//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={() => inputRef.current.focus()}>Click</button>
//     </div>
//   );
// };

// export const Input = () => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(0);
//   useEffect(() => {
//     ref.current = ref.current + 1;
//     console.log(ref.current);
//   });
//   return (
//     <div>
//       <button onClick={() => setCount(prev => prev + 1)}>Click</button>
//     </div>
//   );
// };

// export const Input = () => {
//   const inputRef = useRef(0);
//   function handleClick() {
//     const data = inputRef.current.value;
//     const sum = data.split(',').reduce((acc, curr) => acc + Number(curr), 0);
//     console.log(sum);
//   }
//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={() => handleClick()}>Click</button>
//     </div>
//   );
// };

// export const Input = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
//     </div>
//   );
// };

// export const Input = () => {
//   const [count, setCount] = useState(0);
//   const timerRef = useRef();

//   function handleStart() {
//     timerRef.current = setInterval(() => {
//       setCount(prev => prev + 1);
//     }, 1000);
//   }

//   function handleStop() {
//     clearInterval(timerRef.current);
//   }

//   function clear() {
//     handleStop();
//     setCount(0);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleStart}>start</button>
//       <button onClick={handleStop}>stop</button>
//       <button onClick={clear}>Clear</button>
//     </div>
//   );
// };
