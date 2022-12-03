import { Injectable } from '@angular/core';
import {BaseFacadeService, Maintenance, MaintenanceAttributes, MaintenanceStateEnum, User} from "@new-rentals/shared";
import {MaintenanceStateService} from "./maintenance-state.service";
import {MaintenanceStore, MaintenanceStoreEnum} from "../models/maintenance.store";
import {MaintenanceApiService} from "./maintenance-api.service";
import {map, mapTo, Observable, tap} from "rxjs";
import {MaintenanceBlService} from "./maintenance-bl.service";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceFacadeService extends BaseFacadeService<MaintenanceStateService, MaintenanceStore>{

  constructor(private maintenanceStateService: MaintenanceStateService, private maintenanceApiService: MaintenanceApiService, private maintenanceBlService: MaintenanceBlService) {
    super(maintenanceStateService);
  }

  createMaintenance(attributes: MaintenanceAttributes): Observable<boolean> {
    return this.maintenanceApiService.createMaintenance(attributes).pipe(mapTo(true));
  }

  getCurrentUserDetails(id: string): Observable<User> {
    return this.maintenanceApiService.getCurrentUserDetails(id);
  }

  getMaintenances(): Observable<boolean> {
    return this.maintenanceApiService.getMaintenances().pipe(tap((maintenances) => {
      this.updateSpecificState(this.maintenanceBlService.getMaintenanceStateMap(maintenances), MaintenanceStoreEnum.MAINTENANCES_MAP);
    }), mapTo(true));
  }

}
