import React from 'react';
import TestSubmit from '../pages/TestSubmit';

const routes = [
  {
    path: '/dev',
    children: [
      {
        path: 'form-submit',
        element: <TestSubmit />,
      },
    ],
  },
];

export default routes;
