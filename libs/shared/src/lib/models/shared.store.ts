import {Unit} from "./graphql";

export interface SharedStoreState {
  geoCodingFilters: any;
  unit: Unit;
}

export enum SharedStoreStateEnum {
  GEO_CODING_FILTERS = 'geoCodingFilters',
  UNIT = 'unit'
}
