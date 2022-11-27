import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'new-rentals-apply-tenant-modal',
  templateUrl: './apply-tenant-modal.component.html',
  styleUrls: ['./apply-tenant-modal.component.scss'],
})
export class ApplyTenantModalComponent implements OnInit {
  salutations: string[] = ['Mr', 'Mrs'];

  constructor(public dialogRef: MatDialogRef<ApplyTenantModalComponent>) {}

  ngOnInit(): void {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
