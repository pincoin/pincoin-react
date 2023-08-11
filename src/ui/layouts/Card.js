import React from 'react';

const Card = (props) => {
  return <div className={`${props.className} md:shadow`}>{props.children}</div>;
};

export default Card;
