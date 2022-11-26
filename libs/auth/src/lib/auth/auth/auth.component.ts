import { Component, OnInit } from '@angular/core';
import {AuthType} from "../models/auth.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {HttpClient} from "@angular/common/http";
import {finalize, tap} from "rxjs";
import {NotificationService} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
  componentType?: AuthType;
  loading?:boolean;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService, private http: HttpClient, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => (this.componentType = value['type']));
    this.componentType !== 'login' && this.authService.setCredentials();

  }

  submit(event: any): void {
    this.componentType === 'login' ? this.login(event) : this.signUp(event);
  }

  login(loginData: {user: {email: string, password: string}}): void {
    this.loading = true;
    this.authService.login(loginData).pipe(tap(response => {
      this.router.navigate(['/users']);
    }), finalize(() => this.loading = false)).subscribe()
  }

  signUp(signUpData: any): void {
    this.authService.signUp(signUpData).pipe(tap(response => {
      this.notificationService.success('Signed In Successfully');
      this.router.navigate([''])
    }, (error) => {
      this.notificationService.error(error['error']['errors'][0]);
    })).subscribe();
  }
}
