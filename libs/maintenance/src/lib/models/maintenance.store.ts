import {Maintenance, MaintenanceAttributes} from "@new-rentals/shared";

export interface MaintenanceStore {
  maintenances: Maintenance[];
  maintenancesMap:  Record<string, {data: Maintenance[], openToInProgressApiCall?:string, onHoldToInProgressApiCall?: string, apiCall: string }>;
  maintenanceFilters: MaintenanceAttributes;
}

export enum MaintenanceStoreEnum {
  MAINTENANCES = 'maintenances',
  MAINTENANCES_MAP = 'maintenancesMap',
  MAINTENANCE_FILTERS = 'maintenanceFilters',
}
