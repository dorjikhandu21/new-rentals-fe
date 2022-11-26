import { Injectable } from '@angular/core';
import {BaseFacadeService, PropertyAttributes, UnitFilterAttributes} from "@new-rentals/shared";
import {PropertyStateService} from "./property-state.service";
import {PropertyStore, PropertyStoreEnum} from "../models/property.store";
import {mapTo, Observable, tap} from "rxjs";
import {PropertyApiService} from "./property-api.service";
import {PropertyBlService} from "./property-bl.service";

@Injectable({
  providedIn: 'root'
})
export class PropertyFacadeService extends BaseFacadeService<PropertyStateService, PropertyStore>{

  constructor(private propertyStateService: PropertyStateService, private propertyApiService: PropertyApiService, private propertyBlService: PropertyBlService) {
    super(propertyStateService)
  }
  createProperty(attributes: PropertyAttributes): Observable<boolean> {
    return this.propertyApiService.createProperty(this.propertyBlService.getPropertyPayload(attributes)).pipe(tap((response) => {
      this.updateSpecificState(response, PropertyStoreEnum.PROPERTY);
    }), mapTo(true));
  }

  getUnits(filters: UnitFilterAttributes): Observable<boolean> {
    return this.propertyApiService.getUnits(filters).pipe(tap((units) => {
      this.updateSpecificState(units, PropertyStoreEnum.UNITS)
    }), mapTo(true))
  }

  getProperty(id: string): Observable<boolean> {
    return this.propertyApiService.getProperty(id).pipe(tap((response) => {
      this.updateSpecificState(response, PropertyStoreEnum.PROPERTY);
    }), mapTo(true))
  }
}
