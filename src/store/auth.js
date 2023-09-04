import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
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
