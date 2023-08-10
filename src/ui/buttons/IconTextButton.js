import React from 'react';

const IconTextButton = (props) => {
  return (
    <button
      className={`${props.className ? props.className : ''} inline-flex items-center gap-x-1`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default IconTextButton;
