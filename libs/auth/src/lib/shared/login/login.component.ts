import { Component, OnInit } from '@angular/core';
import { switchMap, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthFacadeService} from "@new-rentals/layout";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EndPointUris} from "../../auth/models/auth.model";

@Component({
  selector: 'new-rentals-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordVisibility = true;
  loginEndPointUri = EndPointUris.LOGIN_URI;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('dk3@newrentals.com', Validators.required),
    password: new FormControl('status200', Validators.required)
  })
  constructor(private http: HttpClient, private authFacadeService: AuthFacadeService) {}

  ngOnInit(): void {
    this.listenToTestState()

  }

  login(): void {

    this.http.post(this.loginEndPointUri, { user: {...this.loginForm.value}} ).pipe(switchMap((user) => {
      // @ts-ignore
      return this.authFacadeService.updateUser({attributes: user['id']})
    })).subscribe();
  }

  listenToTestState(): void {
    this.authFacadeService.specificStateChange('error').pipe(tap((error) => {
      debugger
    })).subscribe();
  }
}
