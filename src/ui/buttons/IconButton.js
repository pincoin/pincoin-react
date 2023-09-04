import React from 'react';

const IconButton = ({ children, ...rest }) => {
  return (
    <button
      className={`${
        rest.className ? rest.className : ''
      } inline-flex items-center align-middle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
