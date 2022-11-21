import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ApplicationDetailModalComponent} from "../application-detail-modal/application-detail-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'new-rentals-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss'],
})
export class ApplicationListComponent implements OnInit {
  received: any[] = ['Get to work', 'Go home', 'Fall asleep'];
  interview: any[] = ['Pick up groceries', 'Go home', 'Fall asleep'];
  declined: any[] = ['Get to work', 'Pick up groceries', 'Fall asleep'];
  accepted: any[] = ['Get up', 'Brush teeth'];

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
  openApplicationDetail(): void {
    this.matDialog.open(ApplicationDetailModalComponent, {
      panelClass: ['modal-sm', 'full-width-modal', 'common-chat-modal'],
      position: {right: '0', top: '0', bottom:'0'},
      data: {
      }
    });
  }
}
