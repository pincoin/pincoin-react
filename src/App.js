import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
