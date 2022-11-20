import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'new-rentals-application-detail-modal',
  templateUrl: './application-detail-modal.component.html',
  styleUrls: ['./application-detail-modal.component.scss'],
})
export class ApplicationDetailModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ApplicationDetailModalComponent>,) {}

  ngOnInit(): void {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
