import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {InviteTenantModalComponent} from "../invite-tenant-modal/invite-tenant-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {UserFacadeService} from "../../services/user-facade.service";
import {User} from "@new-rentals/shared";
import {UserStoreEnum} from "../../models/user.store.state";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs";
import {UserTableData} from "../../models/user.model";
export interface PeriodicElement {
  name: string;
  email: string;
  building_name: string;
  apartment: string;
  phone: string;
  status: string;
  actions: string;
  position: number;
}

@Component({
  selector: 'new-rentals-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss'],
})
@UntilDestroy()
export class UserListingComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'email', 'phone', 'building_name', 'apartment', 'status', 'actions'];
  dataSource = new MatTableDataSource<UserTableData>([]);
  selection = new SelectionModel<UserTableData>(true, []);
  constructor(
    public matDialog: MatDialog,
    private userFacadeService: UserFacadeService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.listenToUsersState();
  }


  getUsers(): void {
    this.userFacadeService.getUsers().subscribe();
  }

  listenToUsersState(): void {
    this.userFacadeService.specificStateChange<UserTableData[]>(UserStoreEnum.USER_TABLE_DATA).pipe(untilDestroyed(this), tap((users) => {
      this.dataSource = new MatTableDataSource<UserTableData>(users);
    })).subscribe()
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  openInviteTenant(): void {
    this.matDialog.open(InviteTenantModalComponent, {
      panelClass: ['modal-sm', 'full-width-modal'],
      data: {
      }
    });
  }
}
