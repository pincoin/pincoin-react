import React from 'react';

const TextButton = (props) => {
  return (
    <button
      className={`${
        props.className ? props.className : ''
      } rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default TextButton;
