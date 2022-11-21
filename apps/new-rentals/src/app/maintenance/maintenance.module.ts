import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import {MaintenanceRoutingModule} from "./maintenance-routing.module";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [MaintenanceComponent],
  imports: [CommonModule, MaintenanceRoutingModule, RouterOutlet],
})
export class MaintenanceModule {}
