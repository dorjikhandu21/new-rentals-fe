import { Injectable } from '@angular/core';
import {Maintenance} from "@new-rentals/shared";
import {MaintenanceCdkDataModel} from "../models/maintenance.models";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceBlService {

  constructor() { }

  getMaintenanceStateMap(maintenances: Maintenance[]): Record<string, MaintenanceCdkDataModel>{
     const maintenanceMap: Record<string, MaintenanceCdkDataModel> = {
      open: {data: [], apiCall: 'createTenant'},
      on_hold: {data: [], apiCall: 'onHoldMaintenance'},
      in_progress: {data: [], openToInProgressApiCall: 'workMaintenance', onHoldToInProgressApiCall: 'confirmMaintenance'},
      completed: {data: [], apiCall: 'finishMaintenance'}
    }
    // @ts-ignore
    maintenances.forEach(maintenance => maintenanceMap[maintenance.state].data.push(maintenance));
    // @ts-ignore
    return maintenanceMap;
  }
}
