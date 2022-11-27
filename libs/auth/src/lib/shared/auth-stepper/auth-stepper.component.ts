import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {phoneNumberValidator} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-auth-stepper',
  templateUrl: './auth-stepper.component.html',
  styleUrls: ['./auth-stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AuthStepperComponent implements OnInit{
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  signUpForm?:FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      salutation: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.min(6)]),
      password_confirmation: new FormControl('', [Validators.required, Validators.min(6)]),
      role_id: new FormControl('', Validators.required),
      profile: new FormGroup({
        full_name: new FormControl('', Validators.required),
        phone: new FormControl('', [Validators.required, phoneNumberValidator])
      }),
      subscription_plan: new FormGroup({
        name: new FormControl('golden')
      })
    })
  }

  submit(event: any): void {
    this.submitForm.emit(event);
  }
}
