import React from 'react';

const IconTextButton = ({ children, ...rest }) => {
  return (
    <button
      className={`${rest.className ? rest.className : ''} inline-flex items-center gap-x-1`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconTextButton;
