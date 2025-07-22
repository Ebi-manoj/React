import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <ul>
        <Link to={'/'}>
          {' '}
          <li>Home</li>
        </Link>
        <Link to={'/about'}>
          <li>About</li>
        </Link>
        <li>Contact</li>
      </ul>
    </div>
  );
};
