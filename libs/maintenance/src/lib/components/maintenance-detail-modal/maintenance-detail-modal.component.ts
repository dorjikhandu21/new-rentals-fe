import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'new-rentals-maintenance-detail-modal',
  templateUrl: './maintenance-detail-modal.component.html',
  styleUrls: ['./maintenance-detail-modal.component.scss'],
})
export class MaintenanceDetailModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<MaintenanceDetailModalComponent>,) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
