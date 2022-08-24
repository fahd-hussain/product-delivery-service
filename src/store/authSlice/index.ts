import { createSlice } from "@reduxjs/toolkit";
import { initialAuthState } from "../../type/auth.types";
import { RootState } from "../../type/store.types";
import { login } from "./thunk";

const slice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
      state.isAuthenticated = true;
      state.fetching = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.error = "Email/Password is incorrect";
      state.fetching = false;
    });
  },
});

export const { logout } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export { login };
