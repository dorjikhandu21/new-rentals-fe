import { Injectable } from '@angular/core';
import {BaseFacadeService, MaintenanceAttributes, User} from "@new-rentals/shared";
import {MaintenanceStateService} from "./maintenance-state.service";
import {MaintenanceStore} from "../models/maintenance.store";
import {MaintenanceApiService} from "./maintenance-api.service";
import {mapTo, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceFacadeService extends BaseFacadeService<MaintenanceStateService, MaintenanceStore>{

  constructor(private maintenanceStateService: MaintenanceStateService, private maintenanceApiService: MaintenanceApiService) {
    super(maintenanceStateService);
  }

  createMaintenance(attributes: MaintenanceAttributes): Observable<boolean> {
    return this.maintenanceApiService.createMaintenance(attributes).pipe(mapTo(true));
  }

  getCurrentUserDetails(id: string): Observable<User> {
    return this.maintenanceApiService.getCurrentUserDetails(id);
  }

}
