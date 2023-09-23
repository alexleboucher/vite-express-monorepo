export type AuthLoginBody = {
  login: string;
  password: string;
};

export type AuthLoginResponse = {
  id: string;
  username: string;
  email: string;
};