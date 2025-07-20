import { useRef, useState } from 'react';

export const InputElement = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setValue(e.target.value);
  }
  function handleClick() {
    if (!value) return console.log('name is required');
    console.log(value);
    setValue('');
  }
  return (
    <div id="input-element">
      <h3>Enter you name</h3>
      <input
        ref={inputRef}
        value={value}
        onChange={e => handleChange(e)}
        type="text"
      />
      <button onClick={handleClick}>Submit</button>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
};
