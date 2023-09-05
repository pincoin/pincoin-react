import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { authActions } from '../store/slices/authSlice';
import { getAccessToken, getTokenDuration } from '../util/auth';

const RootLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getAccessToken();

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    if (accessToken === 'EXPIRED') {
      // 이미 만료된 토큰 로그아웃 처리
      dispatch(authActions.logout());
      navigate('/');
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      // 토큰 만료시간 경과 시 로그아웃 처리
      dispatch(authActions.logout());
      navigate('/');
    }, tokenDuration);
  }, [accessToken]);

  // 사이트 기본 레이아웃
  // 컨테이너: 뷰포트 100vh 높이로 공간 확보 - display: flex; flex-direction: column; height: 100vh;
  // - 헤더: 자신의 크기만큼 - flex: 0 0 auto;
  // - 본문: 부모 크기만큼 커지거나 작아짐 - flex: 1 1 0;
  // - 푸터: 자신의 크기만큼 - flex: 0 0 auto;

  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-none" />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer className="flex-none" />
    </div>
  );
};

export default RootLayout;
