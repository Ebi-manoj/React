import React from 'react';
import ReactDOM from 'react-dom/client';

//////////////////////////////////////////////////////////
// const heading = React.createElement('h1', {}, 'Hello world');
// heading will conver into html by babel(transpiled) heading is a react object not html
// const root = ReactDOM.createRoot(document.getElementById('root'));

// using jsx ,it is html like syntax not html,and it will converted into react.create Element by babel then
// it will converted into html

// const heading = <h1>Hello</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

///////////////////////////////////////////////////////////////////////
////REACT FUNCTIONAL COMPONENTS

// the name should starts with capital

const Heading = () => <h1>Hello World</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
const MoreComponent = () => (
  <div>
    <Heading />
    <p>Welcome to React</p>
  </div>
);
root.render(<MoreComponent />);
