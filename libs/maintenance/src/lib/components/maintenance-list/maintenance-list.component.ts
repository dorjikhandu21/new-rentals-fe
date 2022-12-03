import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDialog} from "@angular/material/dialog";
import {MaintenanceDetailModalComponent} from "../maintenance-detail-modal/maintenance-detail-modal.component";
import {RequestMaintenanceModalComponent} from "../request-maintenance-modal/request-maintenance-modal.component";
import {MaintenanceFacadeService} from "../../services/maintenance-facade.service";
import {
  Maintenance,
  MaintenanceAttributes,
  MaintenanceStateEnum, PriorityEnum,
  PropertyTypeEnum,
  RequestTypeEnum
} from "@new-rentals/shared";
import {MaintenanceStoreEnum} from "../../models/maintenance.store";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {switchMap, tap} from "rxjs";
import {MAINTENANCE_MAP, MaintenanceCdkDataModel} from "../../models/maintenance.models";
import {MaintenanceApiService} from "../../services/maintenance-api.service";

@UntilDestroy()
@Component({
  selector: 'new-rentals-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss'],
})
export class MaintenanceListComponent implements OnInit {
  maintenancesMap: Record<string, MaintenanceCdkDataModel> = MAINTENANCE_MAP
  priorityTypeEnum = PriorityEnum;
  requestTypeEnum = RequestTypeEnum;

  drop(event: CdkDragDrop<Maintenance[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const currentlyDraggedItem = event.previousContainer.data[event.previousIndex];
      if (['in_progress'].includes(event.container.id)) {
        this.maintenanceApiService[event.previousContainer.id === 'open' ? this.maintenancesMap[event.container.id].openToInProgressApiCall : this.maintenancesMap[event.container.id].onHoldToInProgressApiCall](currentlyDraggedItem.id).pipe(switchMap(() => this.maintenanceFacadeService.getMaintenances())).subscribe();
      } else {
        this.maintenanceApiService[this.maintenancesMap[event.container.id].apiCall](currentlyDraggedItem.id).pipe(switchMap(() => this.maintenanceFacadeService.getMaintenances())).subscribe();
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  constructor(public matDialog: MatDialog, private maintenanceFacadeService: MaintenanceFacadeService, private maintenanceApiService: MaintenanceApiService) {
  }

  ngOnInit(): void {
    this.updateMaintenanceFilters();
    this.listenToMaintenanceFilters();
    this.listenToMaintenancesMapState();
  }

  updateMaintenanceFilters(): void {
    this.maintenanceFacadeService.updateSpecificState({}, MaintenanceStoreEnum.MAINTENANCE_FILTERS);
  }

  listenToMaintenanceFilters(): void {
    this.maintenanceFacadeService.specificStateChange<MaintenanceAttributes>(MaintenanceStoreEnum.MAINTENANCE_FILTERS).pipe(untilDestroyed(this), switchMap((filters) => this.maintenanceFacadeService.getMaintenances())).subscribe()
  }

  listenToMaintenancesMapState(): void {
    this.maintenanceFacadeService.specificStateChange(MaintenanceStoreEnum.MAINTENANCES_MAP).pipe(untilDestroyed(this), tap((maintenancesMap) => {
      this.maintenancesMap = maintenancesMap as Record<string, { data: Maintenance[], openToInProgressApiCall?: string, onHoldToInProgressApiCall?: string, apiCall: string }>
    })).subscribe();
  }

  openMaintenanceDetail(): void {
    this.matDialog.open(MaintenanceDetailModalComponent, {
      panelClass: ['modal-sm', 'full-width-modal', 'common-chat-modal'],
      position: {right: '0', top: '0', bottom: '0'},
      data: {}
    });
  }

  openMaintenanceRequest(): void {
    this.matDialog.open(RequestMaintenanceModalComponent, {
      panelClass: ['modal-sm', 'full-width-modal'],
      data: {}
    });
  }
}
