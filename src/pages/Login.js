import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MdWarning } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import { authActions } from '../store/slices/authSlice';
import ContainerFixed from '../ui/layouts/ContainerFixed';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const actionData = useActionData();
  const submit = useSubmit();

  const {
    register,
    trigger,
    // 성능 이슈 문제로 formState 반드시 destructuring
    formState: { errors, isValid },
    clearErrors,
  } = useForm({
    mode: 'onBlur',
  });

  // 폼 전송 중 처리 시 react-hook-form formState.isSubmitting 사용하면 충돌
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
    if (actionData && actionData.accessToken) {
      dispatch(authActions.login());
      navigate('/');
    }
  }, [actionData]);

  const formSubmitHandler = async (event) => {
    // react-router-dom 폼과 react-hook-form 폼 호환성 문제로 handleSubmit 사용 안 함
    event.preventDefault();

    if (!isValid) {
      await trigger(); // 폼 입력이 유효하지 않으면 오류 메시지 출력
    }

    submit(event.currentTarget); // react-router-dom action 함수로 폼 전송 요청
  };

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
                <ul className="list-disc -ml-3 gap-y-2">
                  <li>
                    1년 이상 미접속 계정 정보는 법령에 따라 모두 파기합니다.
                  </li>
                  <li>1년 이상 미접속 고객님은 다시 [회원가입]해주세요.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Form
          method="post"
          onSubmit={formSubmitHandler}
          className="flex-1 flex flex-col gap-y-4"
        >
          <div className="sm:grid sm:grid-cols-6 gap-x-4 items-center">
            <label className="ml-auto text-sm">이메일</label>
            <div className="sm:col-span-4 flex mt-2 sm:mt-0 rounded shadow ring-1 ring-inset ring-gray-400 focus-within:ring-1 focus-within:ring-inset focus-within:ring-teal-600">
              <input
                type="email"
                placeholder="username@example.com"
                {...register('email', {
                  required: '이메일을 올바르게 입력해주세요.',
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: '이메일을 올바르게 입력해주세요.',
                  },
                })}
                onChange={() => {
                  if (errors?.email) {
                    clearErrors('email');
                  }
                }}
                className="flex-1 border-0 bg-transparent text-sm focus:ring-0"
              />
            </div>
            {errors?.email?.message && (
              <div className="sm:col-start-2 sm:col-span-4 mt-1.5 text-red-500 text-sm">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="sm:grid sm:grid-cols-6 gap-x-4 items-center">
            <label className="ml-auto text-sm">비밀번호</label>
            <div className="sm:col-span-4 flex mt-2 sm:mt-0 rounded shadow ring-1 ring-inset ring-gray-400 focus-within:ring-1 focus-within:ring-inset focus-within:ring-teal-600">
              <input
                type="password"
                placeholder="****"
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                  minLength: {
                    value: 4,
                    message: '비밀번호는 4글자 이상이어야 합니다.',
                  },
                })}
                onChange={() => {
                  if (errors?.password) {
                    clearErrors('password');
                  }
                }}
                className="flex-1 border-0 bg-transparent text-sm focus:ring-0"
              />
            </div>
            {errors?.password?.message && (
              <div className="sm:col-start-2 sm:col-span-4 mt-1.5 text-red-500 text-sm">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="sm:grid sm:grid-cols-6 gap-x-4 items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="sm:col-start-2 sm:col-span-4 w-full py-2 bg-green-950 text-white rounded"
            >
              {isSubmitting ? '로그인하는 중' : '로그인'}
            </button>
          </div>
        </Form>

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

export const action = async ({ request }) => {
  const formData = await request.formData();

  let response;

  try {
    response = await axios.post(
      `${process.env.API_URL}/auth/authenticate`,
      {
        email: formData.get('email'),
        password: formData.get('password'),
        grantType: 'password',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.log(error);
    return error;
  }

  if (response.status === 200) {
    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + response.data.expiresIn);

    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    localStorage.setItem('expiration', expiration.toISOString());

    return {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      expiration: expiration.toISOString(),
    };
  }

  return null;
};

export default Login;
