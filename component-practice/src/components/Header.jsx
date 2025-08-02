import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utilities/useOnlineStatus';
import { useSelector } from 'react-redux';

export const Heading = () => {
  const [loginText, setLoginText] = useState('Sign In');
  function changeText(text) {
    const value = text == 'Sign In' ? 'Logout' : 'Sign In';
    setLoginText(value);
  }

  const items = useSelector(store => store.cart.items);

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
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link className="nav-links" to={'/about'}>
            <li className="cursor-pointer">About</li>
          </Link>
          <Link className="nav-links" to={'/contact'}>
            <li className="cursor-pointer">Contact</li>
          </Link>
          <Link className="nav-links" to={'/cart'}>
            <li className="cursor-pointer">Cart({items.length})</li>
          </Link>

          <li
            className="login-btn cursor-pointer"
            onClick={() => changeText(loginText)}
          >
            {loginText}
          </li>
          <li className="cursor-pointer">
            Online:{useOnlineStatus() ? '✅' : '🔴'}
          </li>
        </ul>
      </div>
    </div>
  );
};
