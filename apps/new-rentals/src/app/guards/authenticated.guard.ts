import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {CredentialsService} from "@new-rentals/shared";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(public router: Router, private credentials: CredentialsService) {}

   canActivate(): boolean {
    if (!this.credentials.isAuthenticated()) {
       this.router.navigate(['']);
    }
    return true;
  }

}
