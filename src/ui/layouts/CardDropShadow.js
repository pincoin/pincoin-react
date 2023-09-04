import React from 'react';

const CardDropShadow = ({ children, ...rest }) => {
  return (
    <div className={`${rest.className} shadow shadow-gray-500`}>
      {children}
    </div>
  );
};

export default CardDropShadow;
