import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const RootLayout = () => {
  // 사이트 기본 레이아웃
  // 컨테이너: 뷰포트 100vh 높이로 공간 확보 - display: flex; flex-direction: column; height: 100vh;
  // - 헤더: 자신의 크기만큼 - flex: 0 0 auto;
  // - 본문: 부모 크기만큼 커지거나 작아짐 - flex: 1 1 0;
  // - 푸터: 자신의 크기만큼 - flex: 0 0 auto;

  return (
    <div className="flex flex-col h-screen gap-y-4">
      <Header className="flex-none" />
      <main className="flex-1">
        <ContainerFixed className="px-2">
          <Outlet />
        </ContainerFixed>
      </main>
      <Footer className="flex-none" />
    </div>
  );
};

export default RootLayout;
