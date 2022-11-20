import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  signUpForm: FormGroup = new FormGroup({});
  mismatchPassword?:boolean;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>()


  constructor(private http: HttpClient, private router: Router, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signUpForm = new FormGroup({
      salutation: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.min(6)]),
      password_confirmation: new FormControl('', [Validators.required, Validators.min(6)]),
      role_id: new FormControl(1),
      profile: new FormGroup({
        full_name: new FormControl('', Validators.required),
        phone: new FormControl('', [Validators.required, phoneNumberValidator])
      }),
      subscription_plan: new FormGroup({
        name: new FormControl('golden')
      })
    })
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
