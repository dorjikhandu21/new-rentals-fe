import { Injectable } from '@angular/core';
import {BaseStateService} from "@new-rentals/shared";
import {UserStoreState} from "../models/user.store.state";

@Injectable({
  providedIn: 'root'
})
export class UserStateService extends BaseStateService<UserStoreState>{

  constructor() {
    super()
    this.initState();
  }

  initState(): void {
    this.setState({});
  }
}
