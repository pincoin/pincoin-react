import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { categoriesApi } from './apis/categoriesApi';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(categoriesApi.middleware);
  },
});

if (process.env.NODE_ENV === 'development') {
  // 개발 디버깅 시 콘솔에서 store.getState() 접근 가능
  window.store = store;
}

setupListeners(store.dispatch);

export default store;

// 리덕스 사용 예시
// - 관리할 상태가 많고 여러 컴포넌트에서 사용해야할 경우
// - 상태를 자주 업데이트해야 할 경우
// - 상태 변경 로직이 복잡할 때
// - 여러 사람이 협업해야 하는 프로젝트의 경우

// 리덕스와 불변성
// - 리덕스는 모든 상태가 변경되지 않는 것으로 간주한다.
// - 기존 상태의 변경이 아니라 새로운 상태값을 만들어 반환한다.

// 액션
// - type 키를 가진 자바스크립트 객체
// - type: 'domain/eventName'
// - payload: 상태 변경을 위해 전달하는 매개변수

// 리듀서
// 액션 = 이벤트, 리듀서 = 이벤트 리스너
// 리듀서 규칙
// - 기존 상태 및 액션을 사용해서 새로운 상태 값을 만든다.
// - 기존 상태를 직접 수정할 수 없다. 기존 상태값을 deep copy 후 복사한 값을 변경하는 방법으로 새로운 상태값을 반환한다.
// 비동기 작업 수행 또는 임의의 값을 생성하는 등 기타 부작용(side effect)이 없어야 한다.

// 스토어

// 슬라이스
// 액션과 리듀서 로직을 덩어리로 만든 파일
// 루트 리덕스 상태를 여러 상태로 쪼개기 때문에 슬라이스로 명칭

// dispatch, selector
