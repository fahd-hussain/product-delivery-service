import { createSlice } from "@reduxjs/toolkit";
import { initialAuthState } from "../../type/auth.types";
import { RootState } from "../../type/store.types";
import { login } from "./thunk";

const slice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
      state.isAuthenticated = true;
    });
  },
});

// export const {  } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export { login };
