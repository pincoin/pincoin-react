import React from 'react';

const Footer = (props) => {
  return <header className={`${props.className}`}>{props.children}</header>;
}

export default Footer;