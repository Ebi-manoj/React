import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { About, App, Memo, ParentRef } from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Reducer, Reducer2 } from '../../reactPractice/src/Reducer.jsx';
import { CallBack } from '../../reactPractice/src/useCallback.jsx';

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
  {
    path: '/callback',
    element: <CallBack />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
