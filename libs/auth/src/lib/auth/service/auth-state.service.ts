import { Injectable } from '@angular/core';
import {BaseStateService} from "@new-rentals/shared";
import {AuthStoreState} from "../../../../../layout/src/lib/models/auth.state";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService extends BaseStateService<AuthStoreState>{

  constructor() {
    super();
    this.setUpInitialState();
  }

  setUpInitialState(): void {
    // @ts-ignore
    this.setState({error: undefined});
  }
}
