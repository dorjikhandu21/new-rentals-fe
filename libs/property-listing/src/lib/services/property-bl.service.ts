import { Injectable } from '@angular/core';
import {geocodeLatLng, Unit} from "@new-rentals/shared";

@Injectable({
  providedIn: 'root'
})
export class PropertyBlService {

  constructor() { }

  getFormattedProperties(units: Unit[]): Unit[] {
    const propertyIds: string[] = [];
    const uniqueUnits: Unit[] = [];
    units.forEach(unit => {
      geocodeLatLng(unit);
      !propertyIds.includes(unit.property.id) &&
      uniqueUnits.push(unit);
      propertyIds.push(unit.property.id);
    })
    return uniqueUnits;
  }
}
