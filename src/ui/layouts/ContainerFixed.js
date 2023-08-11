import React from 'react';

const ContainerFixed = (props) => {
  return (
    <div
      className={`${props.className ? props.className : ''} mx-auto max-w-7xl`}
    >
      {props.children}
    </div>
  );
};

export default ContainerFixed;
