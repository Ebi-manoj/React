import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utilities/useOnlineStatus';
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
          <Link className="nav-links" to={'/'}>
            <li>Home</li>
          </Link>
          <Link className="nav-links" to={'/about'}>
            <li>About</li>
          </Link>
          <li>Contact</li>
          <li>Cart</li>
          <li className="login-btn" onClick={() => changeText(loginText)}>
            {loginText}
          </li>
          <li>Online:{useOnlineStatus() ? '✅' : '🔴'}</li>
        </ul>
      </div>
    </div>
  );
};
