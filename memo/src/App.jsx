import { useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useRef } from 'react';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <li onClick={() => navigate('/')}>Home</li>
      <li onClick={() => navigate('/about')}>About</li>
      <li onClick={() => navigate('/memo')}>Memo</li>
      <li onClick={() => navigate('/ref')}>Ref</li>
      <li onClick={() => navigate('/reducer')}>Reducer</li>
    </div>
  );
};

export const About = () => {
  return (
    <>
      <Header />
      <div>This is About</div>
    </>
  );
};

const Hoc = Component => {
  return function () {
    return (
      <div>
        <h1>Enhanced</h1>
        <Component />
      </div>
    );
  };
};

const Component = () => {
  return (
    <div>
      <h4>Normal Component</h4>
    </div>
  );
};

export function App() {
  const Enhanced = Hoc(Component);
  return (
    <>
      <Header />
      <div>This is Home</div>
      <Enhanced />
    </>
  );
}

export function Memo() {
  console.log('Memo parent Rendered');
  const [name, setName] = useState('');

  useEffect(() => {
    // setInterval(() => {
    //   console.log('interval');
    //   setName(prev => (prev == 'Ebi' ? 'Manoj' : 'Ebi'));
    // }, 2000);
  }, []);
  return (
    <>
      <Header />
      <h1>This is Memo Parent</h1>
      <MemoChild data={name} />
    </>
  );
}

const MemoChild = React.memo(({ name }) => {
  const [val, setVal] = useState(0);
  console.log('Memo child rendered');
  return (
    <div>
      <h3 onClick={() => setVal(val + 1)}>This is memo child {name} </h3>
    </div>
  );
});

/////////////////////////////////////////////////////////////////
///Ref

export const ParentRef = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <h1>This is Parent Ref</h1>
      <ChildRef ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Click</button>
    </div>
  );
};

const ChildRef = ({ ref }) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
};
