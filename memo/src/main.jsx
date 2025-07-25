import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { About, App, Memo, ParentRef } from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Reducer, Reducer2 } from '../../reactPractice/src/Reducer.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/memo',
    element: <Memo />,
  },
  {
    path: '/ref',
    element: <ParentRef />,
  },
  {
    path: '/reducer',
    element: <Reducer2 />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
