import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDialog} from "@angular/material/dialog";
import {MaintenanceDetailModalComponent} from "../maintenance-detail-modal/maintenance-detail-modal.component";
import {RequestMaintenanceModalComponent} from "../request-maintenance-modal/request-maintenance-modal.component";

@Component({
  selector: 'new-rentals-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss'],
})
export class MaintenanceListComponent implements OnInit {
  open: any[] = ['There is pipe leakage in my area, I would like to request\n' +
  'to solve it as soon as possible', 'There is pipe leakage in my area, I would like to request\n' +
  'to solve it as soon as possible',];
  onhold: any[] = ['There is pipe leakage in my area, I would like to request\n' +
  'to solve it as soon as possible'];
  inprogress: any[] = ['There is pipe leakage in my area, I would like to request\n' +
  'to solve it as soon as possible', 'There is pipe leakage in my area, I would like to request\n' +
  'to solve it as soon as possible',];
  completed: any[] = ['There is pipe leakage in my area, I would like to request\n' +
  'to solve it as soon as possible'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  constructor( public matDialog: MatDialog,) {}

  ngOnInit(): void {}
  openMaintenanceDetail(): void {
    this.matDialog.open(MaintenanceDetailModalComponent, {
      panelClass: ['modal-sm', 'full-width-modal', 'common-chat-modal'],
      position: {right: '0', top: '0', bottom:'0'},
      data: {
      }
    });
  }

  openMaintenanceRequest(): void {
    this.matDialog.open(RequestMaintenanceModalComponent, {
      panelClass: ['modal-sm', 'full-width-modal'],
      data: {
      }
    });
  }
}
