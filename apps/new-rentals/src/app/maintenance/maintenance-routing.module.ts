import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShellService} from "@new-rentals/shell";
import {MaintenanceComponent} from "./maintenance.component";
import {MaintenanceListComponent, MaintenanceModule} from "@new-rentals/maintenance";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
ShellService.childRoutes([
  {
    path: '',
    component: MaintenanceComponent,
    canActivate: [],
    data: {
      breadCrumb: 'maintenance'
    },
    children: [
      {
        path: '',
        component: MaintenanceListComponent,
      }
    ]
  }
])
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaintenanceModule
  ]
})
export class MaintenanceRoutingModule { }
