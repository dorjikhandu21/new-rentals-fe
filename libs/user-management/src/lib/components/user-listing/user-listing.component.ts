import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {InviteTenantModalComponent} from "../invite-tenant-modal/invite-tenant-modal.component";
import {MatDialog} from "@angular/material/dialog";
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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Dechen Choden', email: 'dc@selise.ch', phone: '17839393', building_name: 'KSR Building', apartment: 'F-6', status:'Active', actions:''},
  {position: 2, name: 'Dechen Choden', email: 'dc@selise.ch', phone: '17839393', building_name: 'KSR Building', apartment: 'F-6', status:'Active', actions:''},
  {position: 3, name: 'Dechen Choden', email: 'dc@selise.ch', phone: '17839393', building_name: 'KSR Building', apartment: 'F-6', status:'Active', actions:''},
  {position: 4, name: 'Dechen Choden', email: 'dc@selise.ch', phone: '17839393', building_name: 'KSR Building', apartment: 'F-6', status:'Active', actions:''},
  {position: 5, name: 'Dechen Choden', email: 'dc@selise.ch', phone: '17839393', building_name: 'KSR Building', apartment: 'F-6', status:'Active', actions:''},
  {position: 6, name: 'Dechen Choden', email: 'dc@selise.ch', phone: '17839393', building_name: 'KSR Building', apartment: 'F-6', status:'Active', actions:''},
  {position: 7, name: 'Dechen Choden', email: 'dc@selise.ch', phone: '17839393', building_name: 'KSR Building', apartment: 'F-6', status:'Active', actions:''}
];
@Component({
  selector: 'new-rentals-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss'],
})

export class UserListingComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'email', 'phone', 'building_name', 'apartment', 'status', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  constructor(
    public matDialog: MatDialog,
  ) {}

  ngOnInit(): void {}

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
