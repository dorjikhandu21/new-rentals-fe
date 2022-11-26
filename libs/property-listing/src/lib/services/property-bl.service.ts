import { Injectable } from '@angular/core';
import {geocodeLatLng, PropertyAttributes, Unit} from "@new-rentals/shared";
import {attachComments} from "@angular/compiler-cli/src/ngtsc/translator";
import {cloneDeep, unset} from "lodash-es";

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

  getPropertyPayload(attributes: PropertyAttributes): PropertyAttributes {
    // @ts-ignore
    const updatedAttributes:PropertyAttributes = cloneDeep(attributes);
    updatedAttributes.attachments?.forEach(attachment => {
      unset(attachment,'url');
    });
    return updatedAttributes;
  }
}
