import React from 'react';

const ContainerFixed = ({children, ...rest}) => {
  return (
    <div
      className={`${rest.className ? rest.className : ''} mx-auto max-w-7xl`}
    >
      {children}
    </div>
  );
};

export default ContainerFixed;
