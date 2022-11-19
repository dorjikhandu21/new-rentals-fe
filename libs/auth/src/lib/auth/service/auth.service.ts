import {Inject, Injectable} from '@angular/core';
import { ENV_TOKEN, EnvToken, StoreState} from "../models/auth.model";
import {HttpClient} from "@angular/common/http";
import {mapTo, Observable, tap} from "rxjs";
import {ObservableStore} from "@codewithdan/observable-store";
import {CredentialsService} from "@new-rentals/shared";

@Injectable()

export class AuthService extends ObservableStore<StoreState>{

  constructor(@Inject(ENV_TOKEN) private env: EnvToken, private http: HttpClient, private credentialsService: CredentialsService) {
    super({ trackStateHistory: true, includeStateChangesOnSubscribe: true });
    // eslint-disable-next-line @typescript-eslint/typedef
    const initialState = { token: null, user: null };
    // @ts-ignore
    this.setState(initialState, 'init_state');
  }

  login(loginData: {user: {email: string, password: string}}): Observable<boolean> {
    return this.http.post(this.env.loginUrl, loginData).pipe(tap((user) => {
      this.setCredentials(user);
    }),mapTo(true));
  }

  signUp(signUpData: any): Observable<boolean> {
    return this.http.post(this.env.signUpUrl, signUpData).pipe(mapTo(true))
  }

  setCredentials(user?: any): void {
    this.credentialsService.clearVersionOneStorage();
    this.credentialsService.setCredentials(user, );
  }

}
