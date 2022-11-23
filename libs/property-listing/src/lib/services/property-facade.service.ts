import { Injectable } from '@angular/core';
import {BaseFacadeService, CreatePropertyInput, PropertyAttributes} from "@new-rentals/shared";
import {PropertyStateService} from "./property-state.service";
import {PropertyStore, PropertyStoreEnum} from "../models/property.store";
import {mapTo, Observable, tap} from "rxjs";
import {PropertyApiService} from "./property-api.service";

@Injectable({
  providedIn: 'root'
})
export class PropertyFacadeService extends BaseFacadeService<PropertyStateService, PropertyStore>{

  constructor(private propertyStateService: PropertyStateService, private propertyApiService: PropertyApiService) {
    super(propertyStateService)
  }
  createProperty(attributes: PropertyAttributes): Observable<boolean> {
    return this.propertyApiService.createProperty(attributes).pipe(tap((response) => {
      this.updateSpecificState(response, PropertyStoreEnum.PROPERTY);
    }), mapTo(true));
  }
}
