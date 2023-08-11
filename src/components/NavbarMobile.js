import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between py-3 md:hidden">
      <div>
        <Link to="/" className="font-bold text-lg">
          {process.env.SITE_TITLE}
        </Link>
      </div>
      <div>
        <Drawer isOpen={isOpen} onOpen={openDrawerHandler} onClose={closeDrawerHandler} />
      </div>
    </div>
  );
};

export default NavbarMobile;
