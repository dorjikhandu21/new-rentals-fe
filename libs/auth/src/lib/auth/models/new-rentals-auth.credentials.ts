import { Injectable } from '@angular/core';

@Injectable()
export class AuthCredentials {
  email?: string;
  password?: string;
  password_confirmation?: string;
  redirectUrl?: string;
  token?: string;
  role_id?: string;

  constructor() {}

}
