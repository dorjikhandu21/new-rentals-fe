import { Injectable } from '@angular/core';
import {BaseStateService} from "./base-state.service";
import {SharedStoreState} from "../models/shared.store";

@Injectable({
  providedIn: 'root'
})
export class SharedStateService extends BaseStateService<SharedStoreState>{

  constructor() {
    super();
    this.setInitialState();
  }

  setInitialState(): void {
    this.setState({}, 'INITIAL_STATE');
  }
}
