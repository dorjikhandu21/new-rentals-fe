export type AuthType =
  | 'login'
  | 'signup'
  | 'resetPassword'
  | 'forgotPassword';

export enum EndPointUris {
  LOGIN_URI = 'https://newrentals.tk/api/v1/users/sign_in',
  SIGN_UP_URI = 'https://newrentals.tk/api/v1/users'
}
