import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  email: string | null;
  id: string | null;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  email: null,
  id: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; email: string }>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.email = null;
      state.id = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
