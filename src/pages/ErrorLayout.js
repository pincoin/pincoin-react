import React from 'react';
import { MdError } from 'react-icons/md';
import { useRouteError } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const ErrorLayout = () => {
  const error = useRouteError();

  let title = '알 수 없는 오류';
  let messages = ['관리자에게 문의하세요.'];

  if (error.status === 404) {
    title = '페이지 없음';
    messages = ['페이지 경로를 확인해주세요.'];
  }

  if (error.response) {
    title = error.response.data.message;
    messages = error.response.data.errors;
    console.log(error.response.data.status);
    console.log(error.response.data.timestamp);
  }

  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-none" />
      <main className="flex-1">
        <ContainerFixed className="px-2 py-4">
          <div className="flex flex-col gap-y-4 rounded-md bg-red-50 p-4">
            <h1 className="inline-flex items-center gap-x-2 text-red-800 font-bold">
              <MdError className="text-red-400" />
              <span>{title}</span>
            </h1>
            <ul className="list-disc gap-y-1 pl-12 text-red-700">
              {messages.map((message, idx) => <li key={idx}>{message}</li>)}
            </ul>
          </div>
        </ContainerFixed>
      </main>
      <Footer className="flex-none" />
    </div>
  );
};

export default ErrorLayout;
