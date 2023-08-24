import React from 'react';
import { MdWarning } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const Login = () => {
  return (
    <ContainerFixed className="px-2 py-4">
      <div className="flex flex-col mx-auto md:w-1/2 gap-y-4 md:shadow md:shadow-gray-500 rounded md:p-4">
        <div className="border-l-4 border-yellow-400 rounded-md bg-yellow-50 px-2 py-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <MdWarning className="text-yellow-800 text-xl" />
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-yellow-800">
                정보통신망법에 따른 개인정보보호 안내
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc -ml-3 space-y-2">
                  <li>
                    1년 이상 미접속 계정 정보는 법령에 따라 모두 파기합니다.
                  </li>
                  <li>1년 이상 미접속 고객님은 다시 [회원가입]해주세요.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <form className="flex-1 flex flex-col gap-y-4">
          <div className="sm:grid sm:grid-cols-6 gap-x-4 items-center">
            <label className="ml-auto text-sm">이메일</label>
            <div className="sm:col-span-4 flex mt-2 sm:mt-0 rounded shadow ring-1 ring-inset ring-gray-400 focus-within:ring-1 focus-within:ring-inset focus-within:ring-teal-600">
              <input
                type="email"
                placeholder="username@example.com"
                className="flex-1 border-0 bg-transparent text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-6 gap-x-4 items-center">
            <label className="ml-auto text-sm">비밀번호</label>
            <div className="sm:col-span-4 flex mt-2 sm:mt-0 rounded shadow ring-1 ring-inset ring-gray-400 focus-within:ring-1 focus-within:ring-inset focus-within:ring-teal-600">
              <input
                type="password"
                placeholder="****"
                className="flex-1 border-0 bg-transparent text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-6 gap-x-4 items-center">
            <button className="sm:col-start-2 sm:col-span-4 w-full py-2 bg-green-950 text-white rounded">
              로그인
            </button>
          </div>
        </form>

        <div className="relative w-10/12 md:w-1/2 mx-auto">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-8 text-gray-500 text-sm">
              SNS 로그인
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-x-4 gap-y-4">
          <div className="flex-1 flex order-2 md:order-1">
            <div className="flex gap-x-8 mx-auto">
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
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-x-4 gap-y-4">
          <Link to="" className="flex-1 text-center bg-pink-100 rounded py-2">
            비밀번호찾기
          </Link>
          <Link to="" className="flex-1 text-center bg-orange-200 rounded py-2">
            회원가입
          </Link>
        </div>
      </div>
    </ContainerFixed>
  );
};

export const action = async () => {
  console.log('로그인 처리');
  return null;
};

export default Login;
