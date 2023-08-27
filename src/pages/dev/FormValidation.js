import React, { useState } from 'react';

const FormValidation = () => {
  // 상태
  // - 필드에 입력된 값 저장
  // - 필드 입력 시도 여부 저장
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(false);

  // 상태 변경에 따른 컴포넌트 렌더링할 때마다 확인
  // 입력 값의 유효성 체크
  const nameValid = name.trim() !== '';

  // 입력 필드의 유효성 체크
  const nameInputInvalid = !nameValid && nameDirty;

  const formSubmitHandler = (event) => {
    // 1단계: 폼 전송 시 검증
    // 장점:
    // - 전체 필드 일괄적으로 검증 가능
    // - 개별필드가 아닌 2개 이상 연관 있는 필드 조합 검증 가능
    // 단점:
    // - 입력 필드가 여러 개 있을 경우 모두 입력 후에 입력 오류 피드백

    // 1. 새로고침 방지
    event.preventDefault();

    setNameDirty(true);

    if (!nameValid) {
      return;
    }

    console.log('form submitted');

    // 필드 입력 상태 초기화
    setNameDirty(false);
    setName('');
  };

  const nameBlurHandler = (event) => {
    // 2단계: 입력 필드를 떠날 때 검증
    // 장점:
    // - 개별 필드 입력마다 검증 피드백 가능
    setNameDirty(true);
  };

  const nameChangeHandler = (event) => {
    // 3단계: 입력마다 폼 검증 실행
    // 장점
    // - 빠른 확인
    // 단점
    // - api 연동 시에는 서버에 과부하
    setName(event.target.value);

    // nameRef.current.value = ''; => DOM 객체에 직접 접근하여 값을 수정하는 것은 권장하지 않음
  };

  return (
    <form method="post" onSubmit={formSubmitHandler} className="inline-flex">
      {nameInputInvalid && <p className="text-red-500">form invalid</p>}
      <input
        type="text"
        onBlur={nameBlurHandler}
        onChange={nameChangeHandler}
      />
      {nameInputInvalid && <p className="text-red-500">Name must not be empty.</p>}
      <button type="submit">submit</button>
    </form>
  );
};

export default FormValidation;
