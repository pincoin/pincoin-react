import React from 'react';
import Forms from '../pages/dev/Forms';
import TestSubmit from '../pages/dev/TestSubmit';

const routes = [
  {
    path: '/dev',
    children: [
      {
        path: 'form-submit',
        element: <TestSubmit />,
      },
      {
        path: 'forms',
        element: <Forms />,
      },
    ],
  },
];

export default routes;
