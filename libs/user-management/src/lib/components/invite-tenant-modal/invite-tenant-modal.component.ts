import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'new-rentals-invite-tenant-modal',
  templateUrl: './invite-tenant-modal.component.html',
  styleUrls: ['./invite-tenant-modal.component.scss'],
})
export class InviteTenantModalComponent implements OnInit {
  salutations: string[] = ['Mr', 'Mrs'];
 /* signUpForm: FormGroup = new FormGroup({});*/
 /* @Output() submitForm: EventEmitter<any> = new EventEmitter<any>()*/
  constructor(public dialogRef: MatDialogRef<InviteTenantModalComponent>,) {}

  ngOnInit(): void {}
  closeDialog(): void {
    this.dialogRef.close();
  }

/*  signUp(): void {
    this.submitForm.emit({user: this?.signUpForm.value});
  }*/
}
