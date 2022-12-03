import {InjectionToken} from "@angular/core";
import {AuthCredentials} from "./new-rentals-auth.credentials";

export type AuthType =
  | 'login'
  | 'signup'
  | 'resetPassword'
  | 'forgotPassword';

export enum EndPointUris {
  LOGIN_URI = 'https://newrentals.tk/api/v1/users/sign_in',
  SIGN_UP_URI = 'https://newrentals.tk/api/v1/users'
}

export interface EnvToken {
  loginUrl: string;
  logOutUrl: string;
  signUpUrl: string;
  graphqlUrl: string;
  googleMapsApiKey?: string;
  rollbarApiKey?: string;
  rollbarEnable?: boolean;
  rollbarEnv: string;
  production: boolean;
}

export const ENV_TOKEN = new InjectionToken<EnvToken>('env-token');

export interface StoreState {
  token: string;
  user: AuthCredentials;
}
