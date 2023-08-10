import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    index: true,
    element: <Root />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
