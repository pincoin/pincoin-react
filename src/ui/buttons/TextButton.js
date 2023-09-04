import React from 'react';

const TextButton = ({ children, ...rest }) => {
  return (
    <button
      className={`${
        rest.className ? rest.className : ''
      } rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TextButton;
