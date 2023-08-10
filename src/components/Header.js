import React from 'react';
import ContainerFixed from '../ui/layouts/ContainerFixed';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Header = (props) => {
  return (
    <header className={`${props.className ? props.className : ''}`}>
      <ContainerFixed className="px-2">
        <NavbarMobile />
        <NavbarDesktop />
      </ContainerFixed>
    </header>
  );
};

export default Header;
