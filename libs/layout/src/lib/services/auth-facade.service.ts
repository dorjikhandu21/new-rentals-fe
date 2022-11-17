import { Injectable } from '@angular/core';
import {AuthStateService} from "./auth-state.service";
import {BaseFacadeService} from "../../../../shared/src/lib/services/base-facade.service";
import {AuthStoreState} from "../models/auth.state";
import {AuthApiService} from "./auth-api.service";
import {Observable, tap} from "rxjs";
import {UpdateUserInput, UpdateUserPayload} from "@new-rentals/shared";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService extends BaseFacadeService<AuthStateService, AuthStoreState>{

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
