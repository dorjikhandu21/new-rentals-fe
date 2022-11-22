import { Injectable } from '@angular/core';
import {BaseStateService} from "@new-rentals/shared";
import {UnitStateStore} from "../../models/unit.store";

@Injectable({
  providedIn: 'root'
})
export class UnitStateService extends BaseStateService<UnitStateStore>{

  constructor() {
    super();
    this.setState({units: undefined});
  }
}
