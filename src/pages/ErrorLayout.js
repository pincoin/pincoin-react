import React from 'react';
import { MdError } from 'react-icons/md';
import { useRouteError } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const ErrorLayout = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = '페이지 없음';
    message = '페이지 경로를 확인해주세요.';
  }

  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-none" />
      <main className="flex-1">
        <ContainerFixed className="px-2 py-4">
          <div className="flex flex-col gap-y-4 rounded-md bg-red-50 p-4">
            <h1 className="inline-flex items-center gap-x-2 text-red-800">
              <MdError className="text-red-400" />
              <span>{title}</span>
            </h1>
            <div className="text-red-700">
              <ul className="list-disc gap-y-1 pl-5">
                <li>{message}</li>
              </ul>
            </div>
          </div>
        </ContainerFixed>
      </main>
      <Footer className="flex-none" />
    </div>
  );
};

export default ErrorLayout;
