import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  CreateTenantPayload,
  CredentialsService,
  SalutationEnum,
  SharedFacadeService,
  Unit,
} from "@new-rentals/shared";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'new-rentals-apply-tenant-modal',
  templateUrl: './apply-tenant-modal.component.html',
  styleUrls: ['./apply-tenant-modal.component.scss'],
})
export class ApplyTenantModalComponent implements OnInit {
  salutations: string[] = [SalutationEnum.Mr, SalutationEnum.Mrs];
  tenantForm?: FormGroup;
  loading?: boolean;

  constructor(public dialogRef: MatDialogRef<ApplyTenantModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { unit: Unit }, private sharedFacadeService: SharedFacadeService, private credentialsService: CredentialsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.tenantForm = new FormGroup({
      applicationTitle: new FormControl('', Validators.required),
      applicationDetail: new FormControl('', Validators.required),
      cid: new FormControl('', Validators.required),
      currentEmployer: new FormControl('', Validators.required),
      pets: new FormControl('', Validators.required),
      familyComposition: new FormControl('', Validators.required),
      preferMoveInDate: new FormControl(new Date(), Validators.required),
      unitId: new FormControl(this.data.unit.id, Validators.required),
      propertyId: new FormControl(this.data.unit.property.id, Validators.required),
      userId: new FormControl(this.credentialsService.currentUser().id, Validators.required),
    })
  }

  closeDialog(flag: boolean): void {
    !flag && this.dialogRef.close();

    flag && this.createTenant();
  }

  createTenant(): void {
    this.loading = true;
    this.sharedFacadeService.createTenant(this.tenantForm?.value).pipe(tap((tenant: CreateTenantPayload) => {
      this.loading = false;
      this.dialogRef.close(tenant);
    })).subscribe();
  }
}
