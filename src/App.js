import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import devRoutes from './routes/dev';
import prodRoutes from './routes/prod';
import store from './store/index';

const router = createBrowserRouter(
  process.env.NODE_ENV === 'development'
    ? [...prodRoutes, ...devRoutes]
    : prodRoutes
);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
