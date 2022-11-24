import { Injectable } from '@angular/core';
import {AuthStateService} from "./auth-state.service";
import {AuthApiService} from "./auth-api.service";
import {BaseFacadeService} from "@new-rentals/shared";
import {StoreState} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService extends BaseFacadeService<AuthStateService, StoreState>{

  constructor(private authStateService: AuthStateService, private authApiService: AuthApiService) {
    super(authStateService);
  }
}
