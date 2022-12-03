import {Maintenance} from "@new-rentals/shared";

export const MAINTENANCE_MAP: Record<string, { data: Maintenance[], apiCall: string }> = {
  open: {data: [], apiCall: 'createTenant'},
  on_hold: {data: [], apiCall: 'createTenant'},
  in_progress: {data: [], apiCall: 'createTenant'},
  completed: {data: [], apiCall: 'createTenant'}
}

export interface MaintenanceCdkDataModel {
  data?: Maintenance[],
  openToInProgressApiCall?: string,
  onHoldToInProgressApiCall?: string,
  apiCall?: string
}
