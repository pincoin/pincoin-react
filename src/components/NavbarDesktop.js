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
import ContainerFixed from '../ui/layouts/ContainerFixed';
import DropdownMenu from './DropdownMenu';

const menu = [
  {
    id: 1,
    title: '구글/넥슨/퍼니카드',
    children: [
      {
        id: 1,
        title: '구글기프트카드',
        slug: '구글기프트카드',
      },
      {
        id: 2,
        title: '넥슨카드',
        slug: '넥슨카드',
      },
      {
        id: 1,
        title: '퍼니카드',
        slug: '퍼니카드',
      },
    ],
  },
  {
    id: 2,
    title: '스마트/도서문화/컬쳐랜드',
    children: [
      {
        id: 1,
        title: '컬쳐랜드상품권',
        slug: '컬쳐랜드상품권',
      },
      {
        id: 2,
        title: '문화상품권',
        slug: '문화상품권',
      },
      {
        id: 3,
        title: '도서문화상품권',
        slug: '도서문화상품권',
      },
      {
        id: 4,
        title: '스마트문화상품권',
        slug: '스마트문화상품권',
      },
    ],
  },
  {
    id: 3,
    title: '에그/해피머니',
    children: [
      {
        id: 1,
        title: '해피머니',
        slug: '해피머니',
      },
      {
        id: 2,
        title: '에그머니',
        slug: '에그머니',
      },
    ],
  },
  {
    id: 4,
    title: '온/틴캐시',
    children: [
      {
        id: 1,
        title: '온캐시',
        slug: '온캐시',
      },
      {
        id: 2,
        title: '틴캐시',
        slug: '틴캐시',
      },
    ],
  },
  {
    id: 5,
    title: '선불쿠폰',
    children: [
      {
        id: 1,
        title: '요기요',
        slug: '요기요',
      },
      {
        id: 2,
        title: '아프리카별풍선',
        slug: '아프리카별풍선',
      },
      {
        id: 3,
        title: '한게임상품권',
        slug: '한게임상품권',
      },
      {
        id: 4,
        title: 'N코인',
        slug: '엔코인',
      },
      {
        id: 5,
        title: '와우캐시',
        slug: '와우캐시',
      },
      {
        id: 6,
        title: '플레이스테이션',
        slug: '플레이스테이션',
      },
      {
        id: 7,
        title: '매니아선불쿠폰',
        slug: '매니아선불쿠폰',
      },
      {
        id: 8,
        title: '아이템베이선불쿠폰',
        slug: '아이템베이선불쿠폰',
      },
    ],
  },
];

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
                          to={`/categories/${child.slug}`}
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
