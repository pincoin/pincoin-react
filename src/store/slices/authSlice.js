import { createSlice } from '@reduxjs/toolkit';

// 새로고침해도 로그인 상태 유지를 위해서 JWT 액세스 토큰은 로컬 스토리지에서 가져온다.
const accessToken = localStorage.getItem('accessToken');

const initialState = {
  isLoading: false,
  isAuthenticated: accessToken != null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: { // 메소드 이름이 dispatch() 할 때 액션 이름 역할
    login(state) {
      // immer 패키지로 불변성을 확보
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
