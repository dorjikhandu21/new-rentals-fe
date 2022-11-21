import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'new-rentals-request-maintenance-modal',
  templateUrl: './request-maintenance-modal.component.html',
  styleUrls: ['./request-maintenance-modal.component.scss'],
})
export class RequestMaintenanceModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<RequestMaintenanceModalComponent>, ) {}

  ngOnInit(): void {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
