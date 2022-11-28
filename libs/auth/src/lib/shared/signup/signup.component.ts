import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {NotificationService, phoneNumberValidator} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  passwordInVisibility: { password: boolean, confirmPassword: boolean } = { password: false, confirmPassword: true };
  salutations: string[] = ['Mr', 'Mrs'];
  @Input() signUpForm: FormGroup = new FormGroup({});
  mismatchPassword?:boolean;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  @Input() set roleId(value: number) {
    this.signUpForm?.get('role_id')?.setValue(value);
  }


  constructor(private http: HttpClient, private router: Router, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {

  }

  signUp(): void {
    this.mismatchPassword = this.signUpForm?.get('password')?.value !== this.signUpForm.get('password_confirmation');
    this.signUpForm.markAllAsTouched();
    if(this.signUpForm.valid){
      this.submitForm.emit({user: this?.signUpForm.value});
    }
  }

  navigate(): void {
    this.router.navigate(['auth']);
  }
}
