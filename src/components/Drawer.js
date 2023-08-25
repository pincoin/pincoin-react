import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import {
  MdInfoOutline,
  MdLogin,
  MdOutlineMenu,
  MdPerson,
  MdSendToMobile,
  MdShoppingBag,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IconButton from '../ui/buttons/IconButton';

const Drawer = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <IconButton
        onClick={props.onOpen}
        className="text-2xl border border-green-950 p-1 rounded-sm"
      >
        <MdOutlineMenu />
      </IconButton>

      <Transition.Root show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-50"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-50"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-100"
            enterFrom="-translate-x-full" /* left to right */
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-100"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full" /* left to right */
          >
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pr-32">
                  {/* 우측 여백으로 크기 조정 */}
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div>
                        <h1 className="font-bold border-l-4 border-b border-green-600 bg-green-50 text-green-800 px-2 py-1">
                          핀코인
                        </h1>
                      </div>
                      {isAuthenticated && (
                        <>
                          <Link
                            to="/settings"
                            className="border-b px-3 py-1 flex gap-x-2 items-center"
                          >
                            <MdPerson />
                            <span>마이페이지</span>
                          </Link>
                          <Link
                            to="/sign-out"
                            className="border-b px-3 py-1 flex gap-x-2 items-center"
                            onClick={props.onClose}
                          >
                            <MdLogin />
                            <span>로그아웃</span>
                          </Link>
                        </>
                      )}
                      {!isAuthenticated && (
                        <>
                          <Link
                            to="/sign-in"
                            className="border-b px-3 py-1 flex gap-x-2 items-center"
                            onClick={props.onClose}
                          >
                            <MdLogin />
                            <span>로그인</span>
                          </Link>
                          <Link
                            to="/sign-up"
                            className="border-b px-3 py-1 flex gap-x-2 items-center"
                          >
                            <MdPerson />
                            <span>회원가입</span>
                          </Link>
                        </>
                      )}
                      <div className="border-b px-3 py-1 flex gap-x-2 items-center">
                        <MdSendToMobile />
                        <span>주문/발송</span>
                      </div>
                      <div className="border-b px-3 py-1 flex gap-x-2 items-center">
                        <MdShoppingBag />
                        <span>장바구니</span>
                      </div>
                      <div className="border-b px-3 py-1 flex gap-x-2 items-center">
                        <MdInfoOutline />
                        <span>고객센터</span>
                      </div>
                      <div>
                        <h1 className="font-bold border-l-4 border-b border-green-600 bg-green-50 text-green-800 px-2 py-1">
                          상품권
                        </h1>
                      </div>
                      <div className="overflow-y-auto h-[calc(100vh_-_264px)]">
                        {props.menu.map((menuItem) => {
                          return (
                            <Link
                              to={`/products/${menuItem.slug}`}
                              className="border-b px-3 py-1 flex gap-x-2 items-center"
                              key={menuItem.id}
                              onClick={props.onClose}
                            >
                              {menuItem.title}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        <h1 className="font-bold border-l-4 border-t border-green-600 bg-green-50 text-green-800 px-2 py-1">
                          {window.location.hostname}
                        </h1>
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Drawer;
