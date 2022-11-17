import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-rentals-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  passwordInVisibility: { password: boolean, confirmPassword: boolean } = { password: true, confirmPassword: true };
  salutations = ['Mr', 'Mrs'];
  constructor() {}

  ngOnInit(): void {}
}
