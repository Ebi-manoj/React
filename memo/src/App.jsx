import { useNavigate } from 'react-router-dom';
import './App.css';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <li onClick={() => navigate('/')}>Home</li>
      <li onClick={() => navigate('/about')}>About</li>
      <li onClick={() => navigate('/memo')}>Memo</li>
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
  return (
    <div>
      <h1>This is Memo Parent</h1>
    </div>
  );
}
