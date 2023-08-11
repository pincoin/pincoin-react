import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/products/ProductDetail';
import ProductList from './pages/products/ProductList';
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
      {
        path: 'products',
        children: [
          {
            path: ':product',
            element: <ProductList />,
          },
          {
            path: ':product/:slug',
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: 'orders',
        children: [
          {
            index: true,
          },
          {
            path: ':slug',
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
