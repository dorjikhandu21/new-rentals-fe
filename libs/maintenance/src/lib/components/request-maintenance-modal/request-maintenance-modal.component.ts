import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CredentialsService, PriorityEnum, RequestTypeEnum} from "@new-rentals/shared";
import {MaintenanceFacadeService} from "@new-rentals/maintenance";
import {finalize, switchMap} from "rxjs";

@Component({
  selector: 'new-rentals-request-maintenance-modal',
  templateUrl: './request-maintenance-modal.component.html',
  styleUrls: ['./request-maintenance-modal.component.scss'],
})
export class RequestMaintenanceModalComponent implements OnInit {
  maintenanceForm: FormGroup = new FormGroup({});
  requestType = RequestTypeEnum;
  priorityEnum = PriorityEnum;
  loading = false;

  constructor(public dialogRef: MatDialogRef<RequestMaintenanceModalComponent>, private credentialsService: CredentialsService, private maintenanceFacadeService: MaintenanceFacadeService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.maintenanceForm = new FormGroup({
      requestTitle: new FormControl('', Validators.required),
      descriptions: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      requestType: new FormControl('', Validators.required),
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  createMaintenance(): void {
    this.loading = true;
    // @ts-ignore
    this.maintenanceFacadeService.getCurrentUserDetails(this.credentialsService.currentUser()['role_id']).pipe(switchMap(({property, tenant}) => this.maintenanceFacadeService.createMaintenance({
      ...this.maintenanceForm.value,
      propertyId: property.id,
      tenantId: tenant.id
    })), finalize(() => {
      this.loading = false;
      this.closeDialog();
    })).subscribe();
  }
}
