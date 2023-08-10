import React from 'react';

const ContainerFluid = (props) => {
  return (
    <div
      className={`${props.className ? props.className : ''} mx-auto max-w-7xl`}
    >
      {props.children}
    </div>
  );
};

export default ContainerFluid;
