import {Property, Unit, UnitFilterAttributes} from "@new-rentals/shared";

export interface PropertyStore {
  properties: Property[];
  units: Unit[];
  property: Property;
  propertyFilters: UnitFilterAttributes;
}

export enum PropertyStoreEnum {
  PROPERTIES = 'properties',
  PROPERTY = 'property',
  PROPERTY_FILTERS = 'propertyFilters',
  UNITS = 'units'
}
