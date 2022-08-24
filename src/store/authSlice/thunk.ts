import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostRequest } from "../../util";
import { LoginPayload, User } from "../../type";
import { RootState } from "../../type/store.types";

const sliceName = "auth";

export const login = createAsyncThunk<
  { user: User; accessToken: string },
  LoginPayload,
  { state: RootState }
>(`${sliceName}/loginStatus`, async (body) => {
  try {
    const resp = await PostRequest({ url: "/login", body });
    return resp.data;
  } catch (e: any) {
    throw e;
  }
});
