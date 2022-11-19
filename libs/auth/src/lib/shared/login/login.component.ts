import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { tap} from "rxjs";
import {AuthFacadeService} from "@new-rentals/layout";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EndPointUris} from "../../auth/models/auth.model";
import { Router} from "@angular/router";

@Component({
  selector: 'new-rentals-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordVisibility = true;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('dk3@newrentals.com', Validators.required),
    password: new FormControl('status200', Validators.required)
  })
  constructor(private router: Router, private authFacadeService: AuthFacadeService) {}
  @Output() submitForm: EventEmitter<{user: {email: string, password: string}}> = new EventEmitter<{user: {email: string, password: string}}>();


  ngOnInit(): void {
    this.listenToTestState()
  }

  login(): void {
    this.submitForm.emit({ user: {...this.loginForm.value}});
  }

  listenToTestState(): void {
    this.authFacadeService.specificStateChange('error').pipe(tap((error) => {
      debugger
    })).subscribe();
  }

  navigate(): void {
    this.router.navigateByUrl('auth/signup');
  }
}
