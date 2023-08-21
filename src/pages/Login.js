import React from 'react';
import { Link } from 'react-router-dom';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const Login = () => {
  return (
    <ContainerFixed className="px-2 py-4">
      <div className="flex flex-col mx-auto md:w-1/2 gap-y-4">
        <p className="flex-1 leading-relaxed bg-amber-100 rounded px-4 py-2">
          1년 이상 미접속 고객님은 다시 회원가입해주세요.
          <br /> [정보통신망법]에 따라 1년 이상 미접속 계정 정보는 모두
          파기합니다.
        </p>

        <form className="flex-1 flex flex-col">
          <div className="flex-1">
            <input type="text" placeholder="이메일주소" />
          </div>
          <div>
            <input type="password" placeholder="비밀번호" />
          </div>
          <div>
            <button type="submit">로그인</button>
          </div>
        </form>
        <div className="flex-1 flex flex-col md:flex-row gap-x-4 gap-y-4 pb-2">
          <div className="flex-1 flex order-2 md:order-1">
            <div className="flex gap-x-2 mx-auto">
              <Link to="" className="">
                <img
                  src={'/assets/naver.png'}
                  alt="네이버 로그인"
                  className="w-12 rounded"
                />
              </Link>
              <Link to="" className="">
                <img
                  src={'/assets/kakao.png'}
                  alt="카카오 로그인"
                  className="w-12 rounded"
                />
              </Link>
              <Link to="" className="">
                <img
                  src={'/assets/google.png'}
                  alt="구글 로그인"
                  className="w-12 rounded border border-gray-900"
                />
              </Link>
              <Link to="" className="">
                <img
                  src={'/assets/facebook.png'}
                  alt="페이스북 로그인"
                  className="w-12 rounded"
                />
              </Link>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2 text-center my-auto">
            <h1 className="font-bold text-lg">SNS 간편로그인</h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-x-4 gap-y-4">
          <Link
            to=""
            className="flex-1 text-center bg-teal-600 rounded py-2 text-white"
          >
            비밀번호찾기
          </Link>
          <Link
            to=""
            className="flex-1 text-center bg-emerald-600 rounded py-2 text-white"
          >
            회원가입
          </Link>
        </div>
      </div>
    </ContainerFixed>
  );
};

export default Login;
