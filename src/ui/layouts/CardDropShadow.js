import React from 'react';

const CardDropShadow = (props) => {
  return <div className={`${props.className} shadow`}>{props.children}</div>;
};

export default CardDropShadow;
