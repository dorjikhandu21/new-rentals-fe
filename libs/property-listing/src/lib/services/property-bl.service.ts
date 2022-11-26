import { Injectable } from '@angular/core';
import {Property, Unit} from "@new-rentals/shared";

@Injectable({
  providedIn: 'root'
})
export class PropertyBlService {

  constructor() { }

  getFormattedProperties(units: Unit[]): Unit[] {
    const propertyIds: string[] = [];
    const uniqueUnits: Unit[] = [];
    units.forEach(unit => {
      !propertyIds.includes(unit.property.id) &&
      uniqueUnits.push(unit);
      propertyIds.push(unit.property.id);
    })
    return uniqueUnits;
  }
}
