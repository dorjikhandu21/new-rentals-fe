import {Inject, Injectable} from '@angular/core';
import { ENV_TOKEN, EnvToken, StoreState} from "../models/auth.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, mapTo, Observable} from "rxjs";
import {ObservableStore} from "@codewithdan/observable-store";
import {CredentialsService, NotificationService, User} from "@new-rentals/shared";

@Injectable()

export class AuthService extends ObservableStore<StoreState>{

  constructor(@Inject(ENV_TOKEN) private env: EnvToken, private http: HttpClient, private credentialsService: CredentialsService, private notificationService: NotificationService) {
    super({ trackStateHistory: true, includeStateChangesOnSubscribe: true });
    // eslint-disable-next-line @typescript-eslint/typedef
    const initialState = { token: null, user: null };
    // @ts-ignore
    this.setState(initialState, 'init_state');
  }

  login(loginData: {user: {email: string, password: string}}): Observable<boolean> {
    // @ts-ignore
    return this.http.post(this.env.loginUrl, loginData, {observe: 'response'}).pipe(map((response: HttpResponse<any>) => {
      const token = response.headers.get('authorization')
      this.setCredentials({token: token as string, user: {...response.body}});
      this.notificationService.success('Logged in Successfully');
    }), map((response: boolean) => response));
  }

  signUp(signUpData: any): Observable<boolean> {
    return this.http.post(this.env.signUpUrl, signUpData).pipe(mapTo(true))
  }

  setCredentials(user?: { token: string, user: User }): void {
    this.credentialsService.clearVersionOneStorage();
    this.credentialsService.setCredentials(user);
  }

}
