import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {RolesEnum} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-select-roles',
  templateUrl: './select-roles.component.html',
  styleUrls: ['./select-roles.component.scss'],
})
export class SelectRolesComponent {
  @Input() roleId?: FormControl;
  rolesIdEnum = RolesEnum;
  rolesClassRef: {user: boolean} = {
    user: false,
  }
  constructor() {}

  setRoles(value: RolesEnum): void {
    this.rolesClassRef.user = value === RolesEnum.USER;
    this.roleId?.setValue(value);
  }
}
