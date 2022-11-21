import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { tap} from "rxjs";
import {AuthFacadeService} from "@new-rentals/layout";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EndPointUris} from "../../auth/models/auth.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'new-rentals-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordVisibility = true;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', Validators.required)
  })
  constructor(private router: Router, private authFacadeService: AuthFacadeService, private route: ActivatedRoute) {}
  @Output() submitForm: EventEmitter<{user: {email: string, password: string}}> = new EventEmitter<{user: {email: string, password: string}}>();


  ngOnInit(): void {
    this.listenToTestState()
  }

  login(): void {
    this.submitForm.emit({ user: {...this.loginForm.value}});
  }

  listenToTestState(): void {
    this.authFacadeService.specificStateChange('error').pipe(tap((error) => {
    })).subscribe();
  }

  navigate(): void {
    void this.router.navigate(['signup'], {relativeTo: this.route});
  }
}
