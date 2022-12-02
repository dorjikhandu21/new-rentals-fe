import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {InviteTenantModalComponent} from "../invite-tenant-modal/invite-tenant-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {UserFacadeService} from "../../services/user-facade.service";
import {RolesEnum, User, UserFilterAttributes} from "@new-rentals/shared";
import {UserStoreEnum} from "../../models/user.store.state";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {debounceTime, finalize, switchMap, tap} from "rxjs";
import {UserTableData} from "../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {PropertyStoreEnum} from "../../../../../property-listing/src/lib/models/property.store";
import {FormControl} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";
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
export class UserListingComponent {
  loading?:boolean;
  emptyData?:boolean;
  searchControl: FormControl = new FormControl('');
  rolesEnum = RolesEnum;
  displayedColumns: string[] = ['select', 'name', 'email', 'phone', 'building_name', 'apartment', 'role', 'actions'];
  dataSource = new MatTableDataSource<UserTableData>([]);
  selection = new SelectionModel<UserTableData>(true, []);
  userFilters: UserFilterAttributes = {
    limitPerPage: 5,
    offsetPage: 0
  }
  constructor(
    public matDialog: MatDialog,
    private userFacadeService: UserFacadeService,
    private router: Router, private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.userFacadeService.updateSpecificState(this.userFilters, UserStoreEnum.USER_FILTERS);
    this.listenToUserFilters();
    this.listenToUsersState();
    this.listenToSearchControl();
  }

  listenToSearchControl(): void {
    this.searchControl.valueChanges.pipe(debounceTime(200),
      untilDestroyed(this), tap((value) => {
        this.userFacadeService.updateSpecificState({
          ...this.userFilters,
          query: value
        }, UserStoreEnum.USER_FILTERS);
      })).subscribe();
  }

  listenToUserFilters(): void {
    this.userFacadeService.specificStateChange<UserFilterAttributes>(UserStoreEnum.USER_FILTERS).pipe(untilDestroyed(this), switchMap((filters) => {
      this.loading = true;
      return this.userFacadeService.getUsers(filters)
    })).subscribe(() => this.loading = false)
  }

  listenToUsersState(): void {
    this.userFacadeService.specificStateChange<UserTableData[]>(UserStoreEnum.USER_TABLE_DATA).pipe(untilDestroyed(this), tap((users) => {
      this.emptyData = users?.length <1;
      this.dataSource = new MatTableDataSource<UserTableData>(users);
    })).subscribe();
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows(): void {
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

  routeToTenantDetail(row: User): void {
    this.router.navigate([row.id], {relativeTo: this.route});
  }

  updateFilters(event: PageEvent): void {
    this.userFilters = {...this.userFilters,
      limitPerPage: event.pageSize,
      offsetPage: event.pageIndex === 0 ? 0 : event.pageSize
    }
    this.userFacadeService.updateSpecificState(this.userFilters, UserStoreEnum.USER_FILTERS);
  }

  updateRoleFilter(event: MatSelectChange): void {
    this.userFilters = {...this.userFilters, roleId: event.value}
    this.userFacadeService.updateSpecificState(this.userFilters, UserStoreEnum.USER_FILTERS);
  }

  clearFilters(): void {
    this.userFilters = {
      limitPerPage: 5,
      offsetPage: 0
    }
    this.userFacadeService.updateSpecificState(this.userFilters, UserStoreEnum.USER_FILTERS);
  }
}
