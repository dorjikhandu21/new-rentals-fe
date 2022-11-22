import { Injectable } from '@angular/core';
import {BaseStateService} from "@new-rentals/shared";
import {StoreState} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService extends BaseStateService<StoreState>{

  constructor() {
    super();
    this.setUpInitialState();
  }

  setUpInitialState(): void {
    // @ts-ignore
    this.setState({error: undefined});
  }
}
