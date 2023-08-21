import React from 'react';

const CardDropShadow = (props) => {
  return <div className={`${props.className} shadow shadow-gray-500`}>{props.children}</div>;
};

export default CardDropShadow;
