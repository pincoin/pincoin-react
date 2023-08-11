import React from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import IconButton from '../ui/buttons/IconButton';

const NavbarMobile = () => {
  return (
    <div className="flex justify-between py-3 md:hidden">
      <div>
        <Link to="/" className="font-bold text-lg">
          {process.env.SITE_TITLE}
        </Link>
      </div>
      <div>
        <IconButton
          onClick={() => {}}
          className="text-2xl border border-green-950 p-1 rounded-sm"
        >
          <MdOutlineMenu />
        </IconButton>
      </div>
    </div>
  );
};

export default NavbarMobile;
