import { Injectable } from '@angular/core';
import {BaseStateService} from "@new-rentals/shared";
import {MaintenanceStore} from "../models/maintenance.store";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceStateService extends BaseStateService<MaintenanceStore>{

  constructor() {
    super();
  }
}
