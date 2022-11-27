import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {FormBuilder, Validators} from "@angular/forms";

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
export class AuthStepperComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) {}



  ngOnInit(): void {}
}
