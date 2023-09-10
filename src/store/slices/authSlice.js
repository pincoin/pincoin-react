import {createSlice} from '@reduxjs/toolkit';
import {login} from '../thunks/authActions'

// 새로고침해도 로그인 상태 유지 = JWT 액세스 토큰 로컬스토리지 저장 = XSS 공격에 취약
// const accessToken = getAccessToken();

const initialState = {
  isLoading: false,
  accessToken: null,
  expiration: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    // 메소드 이름이 dispatch() 할 때 액션 이름 역할
    logout(state) {
      state.isLoading = true;
      state.accessToken = null;
      state.expiration = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers(builder) {
    // immer 패키지로 불변성을 확보

    // 로그인 처리
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.accessToken = null;
        state.expiration = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;

        const expiration = new Date();
        expiration.setSeconds(
          expiration.getSeconds() + action.payload.expiresIn
        );

        state.accessToken = action.payload.accessToken;
        state.expiration = expiration.toISOString();
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.accessToken = null;
        state.expiration = null;
        state.isAuthenticated = false;
        state.error = action.payload;
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
