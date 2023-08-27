import React from 'react';
import FormHookValidation from '../pages/dev/FormHookValidation';
import Forms from '../pages/dev/Forms';
import FormValidation from '../pages/dev/FormValidation';
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
        path: 'forms-valid',
        element: <FormValidation />,
      },
      {
        path: 'forms-hook-valid',
        element: <FormHookValidation />,
      },
      {
        path: 'forms',
        element: <Forms />,
      },
    ],
  },
];

export default routes;
