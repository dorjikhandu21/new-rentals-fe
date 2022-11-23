import {Property} from "@new-rentals/shared";

export interface PropertyStore {
  properties: Property[];
  property: Property;
}

export enum PropertyStoreEnum {
  PROPERTIES = 'properties',
  PROPERTY = 'property'
}
