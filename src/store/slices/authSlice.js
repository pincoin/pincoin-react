import {createSlice} from '@reduxjs/toolkit';
import {userLogin} from '../thunks/authActions'

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
  reducers: {
    // 메소드 이름이 dispatch() 할 때 액션 이름 역할
    logout(state) {
      state.isAuthenticated = false;
    },
  },
  extraReducers(builder) {
    // immer 패키지로 불변성을 확보

    // 로그인 처리
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
