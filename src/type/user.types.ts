export interface User {
  id: number;
  email: string;
}

export const initialUserState: User = {
  id: 0,
  email: "",
};
