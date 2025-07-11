import React from 'react';
import ReactDOM from 'react-dom/client';

const Heading = () => {
  return (
    <div id="header">
      <div className="left">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/008/687/818/non_2x/food-delivery-logo-free-vector.jpg"
        />
      </div>
      <div className="right">
        <ul className="nav-item">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => (
  <div>
    <Heading />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
