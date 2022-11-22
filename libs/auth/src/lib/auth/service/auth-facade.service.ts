import { Injectable } from '@angular/core';
import {AuthStateService} from "./auth-state.service";
import {AuthApiService} from "./auth-api.service";
import {Observable, tap} from "rxjs";
import {BaseFacadeService, UpdateUserInput, UpdateUserPayload} from "@new-rentals/shared";
import {StoreState} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService extends BaseFacadeService<AuthStateService, StoreState>{

  constructor(private authStateService: AuthStateService, private authApiService: AuthApiService) {
    super(authStateService);
  }

  updateUser = (input: UpdateUserInput): Observable<UpdateUserPayload> => {
    return this.authApiService.updateUser(input).pipe(tap(res => {
      debugger
    }, (error) => {
      this.updateSpecificState(error, 'error')
    }));
  }

}
