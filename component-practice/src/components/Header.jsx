import { useState } from 'react';

export const Heading = () => {
  const [loginText, setLoginText] = useState('Sign In');
  function changeText(text) {
    const value = text == 'Sign In' ? 'Logout' : 'Sign In';
    setLoginText(value);
  }
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
          <li className="login-btn" onClick={() => changeText(loginText)}>
            {loginText}
          </li>
        </ul>
      </div>
    </div>
  );
};
