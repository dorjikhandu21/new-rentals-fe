import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { maintenanceRoutes } from './lib.routes';
import { MaintenanceListComponent } from './components/maintenance-list/maintenance-list.component';
import { RequestMaintenanceModalComponent } from './components/request-maintenance-modal/request-maintenance-modal.component';
import { MaintenanceDetailModalComponent } from './components/maintenance-detail-modal/maintenance-detail-modal.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTabsModule} from "@angular/material/tabs";
import {MatMenuModule} from "@angular/material/menu";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule, MatIconModule, DragDropModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule, MatBadgeModule, MatTabsModule, MatMenuModule, MatChipsModule],
  declarations: [
    MaintenanceListComponent,
    RequestMaintenanceModalComponent,
    MaintenanceDetailModalComponent,
  ],
  entryComponents: [MaintenanceDetailModalComponent, RequestMaintenanceModalComponent]
})
export class MaintenanceModule {}
