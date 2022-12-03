import { Injectable } from '@angular/core';
import {Maintenance} from "@new-rentals/shared";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceBlService {

  constructor() { }

  getMaintenanceStateMap(maintenances: Maintenance[]): Record<string, {data: Maintenance[], openToInProgressApiCall?:string, onHoldToInProgressApiCall?: string, apiCall: string }> {
     const maintenanceMap: Record<string, { data: Maintenance[], openToInProgressApiCall?:string, onHoldToInProgressApiCall?: string, apiCall?: string }> = {
      open: {data: [], apiCall: 'createTenant'},
      on_hold: {data: [], apiCall: 'onHoldMaintenance'},
      in_progress: {data: [], openToInProgressApiCall: 'workMaintenance', onHoldToInProgressApiCall: 'createMaintenance'},
      completed: {data: [], apiCall: 'finishMaintenance'}
    }
    // @ts-ignore
    return maintenances.forEach(maintenance => maintenanceMap[maintenance.state].data.push(maintenance));
  }
}
