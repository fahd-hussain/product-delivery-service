import { User } from "./user.types";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
  error: string | null;
  fetching: boolean;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  error: null,
  fetching: false,
};

export interface LoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}
