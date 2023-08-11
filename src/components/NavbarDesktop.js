import React from 'react';
import {MdInfoOutline, MdLogin, MdLogout, MdPersonPin, MdSendToMobile, MdShoppingBag} from 'react-icons/md';
import { Link } from 'react-router-dom';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const NavbarDesktop = () => {
  return (
    <div className="hidden md:flex md:flex-col">
      <div className="bg-white">
        <ContainerFixed className="px-2 py-2">
          <div className="flex justify-between">
            <div className="font-bold">핀코인</div>
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
                <MdPersonPin/>
                <span>마이페이지</span>
              </Link>
              <Link to="/" className="inline-flex items-center gap-x-1">
                <MdLogin/>
                <span>로그인</span>
              </Link>
              <Link to="/" className="inline-flex items-center gap-x-1">
                <MdLogout/>
                <span>로그아웃</span>
              </Link>
            </div>
          </div>
        </ContainerFixed>
      </div>
      <div className="bg-green-50 text-green-950">
        <ContainerFixed className="px-2 py-2">
          <div className="flex gap-x-4">
            <div>구글/넥슨/퍼니카드</div>
            <div>스마트/도서문화/컬쳐랜드</div>
            <div>에그/해피머니</div>
            <div>온/틴캐시</div>
            <div>선불쿠폰</div>
          </div>
        </ContainerFixed>
      </div>
    </div>
  );
};

export default NavbarDesktop;
