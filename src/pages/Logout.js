import React, { useEffect } from 'react';
import {MdWarning} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Form, useActionData, useNavigate } from 'react-router-dom';
import { authActions } from '../store/auth';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      dispatch(authActions.logout());
      navigate('/');
    }
  }, [actionData]);

  return (
    <ContainerFixed className="px-2 py-4">
      <div className="flex flex-col mx-auto md:w-1/2 gap-y-4">
        <div className="border-l-4 border-yellow-400 rounded-md bg-yellow-50 px-2 py-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <MdWarning className="text-yellow-800 text-xl" />
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-yellow-800">
                로그아웃
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc -ml-3 gap-y-2">
                  <li>
                    공용 컴퓨터 사용 시 개인정보보호를 위해 반드시 로그아웃해주세요.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Form method="post" className="flex-1 flex flex-col gap-y-4">
          <div className="sm:grid sm:grid-cols-6 gap-x-4 items-center">
            <button className="sm:col-start-2 sm:col-span-4 w-full py-2 bg-red-950 text-white rounded">
              로그아웃
            </button>
          </div>
        </Form>
      </div>
    </ContainerFixed>
  );
};

export const action = async () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('expiration');

  return true;
};

export default Logout;
