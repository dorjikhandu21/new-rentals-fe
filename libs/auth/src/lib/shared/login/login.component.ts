import { Component, OnInit } from '@angular/core';
import { switchMap, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthFacadeService} from "@new-rentals/layout";

@Component({
  selector: 'new-rentals-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordVisibility = true;
  constructor(private http: HttpClient, private authFacadeService: AuthFacadeService) {}

  ngOnInit(): void {
    this.listenToTestState()

  }

  login(): void {

    this.http.post('https://newrentals.tk/api/v1/users/sign_in', { user: {email: 'dk3@newrentals.com', password: 'status200'}} ).pipe(switchMap((res) => {
      // @ts-ignore
      return this.authFacadeService.updateUser({attributes: res['id']})
    })).subscribe();
  }

  listenToTestState(): void {
    this.authFacadeService.specificStateChange('error').pipe(tap((error) => {
      debugger
    })).subscribe();
  }
}
