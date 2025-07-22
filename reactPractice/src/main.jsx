import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { User } from './App';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Route1 } from './route1';
import { Error } from './Error';
import { Header } from './Header';

const Route2 = React.lazy(() => import('./route2'));

const MyLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MyLayout />,
    children: [
      {
        path: '/',
        element: <Route1 />,
      },
      {
        path: '/about',
        element: (
          <Route2 />
          // <Suspense fallback={<div>Hello</div>}>
          // </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
