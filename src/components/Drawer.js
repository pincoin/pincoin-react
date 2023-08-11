import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { MdClose, MdOutlineMenu } from 'react-icons/md';
import IconButton from '../ui/buttons/IconButton';

const Drawer = (props) => {
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
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-100"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-40">
                  {/* 좌측 여백으로 크기 조정 */}
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            서랍 메뉴 제목
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md bg-white text-green-950 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-950 focus:ring-offset-2"
                              onClick={props.onClose}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">서랍 닫기</span>
                              <MdClose className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Your content */}
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
