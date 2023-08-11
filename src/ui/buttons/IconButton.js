import React from 'react';

const IconButton = (props) => {
  return (
    <button
      className={`${
        props.className ? props.className : ''
      } inline-flex items-center align-middle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default IconButton;
