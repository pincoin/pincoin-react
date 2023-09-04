import React from 'react';

const Card = ({children, ...rest}) => {
  return <div className={`${rest.className}`}>{children}</div>;
};

export default Card;
