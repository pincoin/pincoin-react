import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavbarDesktop from '../components/NavbarDesktop';
import NavbarMobile from '../components/NavbarMobile';
import ContainerFixed from '../ui/layout/ContainerFixed';

const Root = () => {
  // 사이트 기본 레이아웃
  // 컨테이너: 뷰포트 100vh 높이로 공간 확보 - display: flex; flex-direction: column; height: 100vh;
  // - 헤더: 자신의 크기만큼 - flex: 0 0 auto;
  // - 본문: 부모 크기만큼 커지거나 작아짐 - flex: 1 1 0;
  // - 푸터: 자신의 크기만큼 - flex: 0 0 auto;

  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-none">
        <ContainerFixed className="px-2">
          <NavbarMobile />
          <NavbarDesktop />
        </ContainerFixed>
      </Header>
      <main className="flex-1">{Outlet}</main>
      <Footer className="flex-none flex flex-col">
        <div className="bg-gray-300">upper</div>
        <div className="bg-teal-950 text-center">
          <div className="flex flex-col md:flex-row gap-x-4 py-4 text-white text-center">
            <div className="flex-1 md:text-right">
              Copyright &copy; 2012-2023 {window.location.hostname}
            </div>
            <div className="flex-1 md:text-left">All Rights Reserved.</div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Root;
