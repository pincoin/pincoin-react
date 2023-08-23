import React from 'react';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const Logout = () => {
  return (
    <ContainerFixed className="px-2 py-4">
      <div className="flex flex-col">
        <p>로그아웃 폼</p>
      </div>
    </ContainerFixed>
  );
};

export const action = async () => {
  console.log('로그아웃 처리');

  return null;
};

export default Logout;
