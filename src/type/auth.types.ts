import { User } from "./user.types";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
};

export interface LoginPayload {
  email: string;
  password: string;
}
