import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import devRoutes from './routes/dev';
import prodRoutes from './routes/prod';

const router = createBrowserRouter(
  process.env.NODE_ENV === 'development'
    ? [...prodRoutes, ...devRoutes]
    : prodRoutes
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
