import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormHookValidation = () => {
  const {
    register,
    // 성능 향상으로 formState는 반드시 destructuring
    formState: { errors, isSubmitSuccessful, isValid, isDirty },
    handleSubmit,
    setError,
    reset,
    clearErrors,
  } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log('폼 전송 완료 후 필드 초기화');
      reset();
    }
  }, [isSubmitSuccessful]);

  const onValid = async (data, event) => {
    console.log('폼 전송 핸들러', data, event);

    if (data.password !== data.passwordRepeat) {
      setError(
          'passwordRepeat',
          { message: '비밀번호가 일치하지 않습니다.' },
          { shouldFocus: true },
      );
      return;
    }

    // 에러가 발생할 수 있는 async 요청
    try {
      // await axios.get()
    } catch (error) {
      // 에러 처리
    }
    console.log('폼 전송 완료');
  };

  const onInvalid = async (error, event) => {
    console.log('폼 에러 핸들러', error, event);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onValid, onInvalid)}>
      <label htmlFor="email">
        이메일
        <input
          type="email"
          {...register('email', {
            required: '이메일을 올바르게 입력해주세요.',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: '이메일을 올바르게 입력해주세요.',
            },
          })}
          onChange={() => {
            if (errors.email) {
              clearErrors('email');
            }
          }}
        />
      </label>
      {errors?.email && <p>{errors?.email?.message}</p>}
      <label htmlFor="password">
        비밀번호
        <input
          type="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message:
                '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
            },
          })}
          onChange={() => {
            if (errors.password) {
              clearErrors('password');
            }
          }}
        />
      </label>
      {errors?.password && <p>{errors?.password?.message}</p>}
      <label htmlFor="passwordRepeat">
        비밀번호
        <input
            type="password"
            {...register('passwordRepeat', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message:
                    '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
              pattern: {
                value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                    '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
            })}
            onChange={() => {
              if (errors.passwordRepeat) {
                clearErrors('passwordRepeat');
              }
            }}
        />
      </label>
      {errors?.passwordRepeat && <p>{errors?.passwordRepeat?.message}</p>}
      <button type="submit">회원가입</button>
    </form>
  );
};

export default FormHookValidation;
