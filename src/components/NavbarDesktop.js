import { Menu } from '@headlessui/react';
import React from 'react';
import {
  MdInfoOutline,
  MdLogin,
  MdLogout,
  MdPersonPin,
  MdSendToMobile,
  MdShoppingBag,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import menu from '../json/desktop-menu.json';
import ContainerFixed from '../ui/layouts/ContainerFixed';
import DropdownMenu from './DropdownMenu';

const NavbarDesktop = () => {
  return (
    <div className="hidden md:flex md:flex-col">
      <div className="bg-white">
        <ContainerFixed className="px-2 py-2">
          <div className="flex justify-between">
            <div className="font-bold">
              <Link to="/">
                <img
                  src={process.env.LOGO_DESKTOP}
                  alt={process.env.SITE_TITLE}
                />
              </Link>
            </div>
            <div className="flex-none flex gap-x-4">
              <Link to="/" className="inline-flex items-center gap-x-1">
                <MdSendToMobile />
                <span>주문발송</span>
              </Link>
              <Link to="/" className="inline-flex items-center gap-x-1">
                <MdShoppingBag />
                <span>장바구니</span>
              </Link>
              <Link to="/" className="inline-flex items-center gap-x-1">
                <MdInfoOutline />
                <span>고객센터</span>
              </Link>
              <Link to="/" className="inline-flex items-center gap-x-1">
                <MdPersonPin />
                <span>마이페이지</span>
              </Link>
              <Link to="/" className="inline-flex items-center gap-x-1">
                <MdLogin />
                <span>로그인</span>
              </Link>
              <Link to="/" className="inline-flex items-center gap-x-1">
                <MdLogout />
                <span>로그아웃</span>
              </Link>
            </div>
          </div>
        </ContainerFixed>
      </div>
      <div className="bg-green-50 text-green-950">
        <ContainerFixed className="px-2 py-2">
          <div className="flex gap-x-4">
            {menu.map((menuItem) => {
              return (
                <DropdownMenu title={menuItem.title} key={menuItem.id}>
                  {menuItem.children.map((child) => {
                    return (
                      <Menu.Item key={child.id}>
                        <Link
                          to={`/products/${child.slug}`}
                          className="block px-4 py-2"
                        >
                          {child.title}
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </DropdownMenu>
              );
            })}
          </div>
        </ContainerFixed>
      </div>
    </div>
  );
};

export default NavbarDesktop;
