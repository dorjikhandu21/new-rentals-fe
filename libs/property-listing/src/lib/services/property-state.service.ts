import { Injectable } from '@angular/core';
import {BaseStateService} from "@new-rentals/shared";
import {PropertyStore} from "../models/property.store";

@Injectable({
  providedIn: 'root'
})
export class PropertyStateService extends BaseStateService<PropertyStore>{

  constructor() {
    super();
    this.setState({properties: undefined, property: undefined});
  }
}
