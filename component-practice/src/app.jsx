import React from 'react';
import ReactDOM from 'react-dom/client';
import { Heading } from './components/Header';
import { Body } from './components/Body';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Restaurant } from './components/Restaurant';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Restaurant } from './components/Restaurant';
const AppLayout = () => (
  <div>
    <Heading />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:id',
        element: <Restaurant />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

///Use Effect ,we pass a callback function and dependency(optional),but if you didnt provide it will call
// all the time before render but if you give or even [] it will call it only once in initial time
