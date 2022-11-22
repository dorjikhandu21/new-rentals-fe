import { Injectable } from '@angular/core';
import {BaseStateService} from "@new-rentals/shared";
import {LayoutStateStore} from "@new-rentals/layout";

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService extends BaseStateService<LayoutStateStore>{

  constructor() {
    super();
    this.setInitialState();

  }
  setInitialState(): void  {
    this.setState({units: undefined});
  }

}
