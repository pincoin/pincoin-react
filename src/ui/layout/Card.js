import React from 'react';

const Card = (props) => {
  return <div className={`${props.className} shadow`}>{props.children}</div>;
};

export default Card;
