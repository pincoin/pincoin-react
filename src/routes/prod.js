import React from 'react';
import ErrorLayout from '../pages/ErrorLayout';
import Home from '../pages/Home';
import Login, { action as loginAction } from '../pages/Login';
import Logout from '../pages/Logout';
import ProductDetail from '../pages/products/ProductDetail';
import ProductList from '../pages/products/ProductList';
import RootLayout from '../pages/RootLayout';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'sign-in',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'sign-out',
        element: <Logout />,
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
];

export default routes;
