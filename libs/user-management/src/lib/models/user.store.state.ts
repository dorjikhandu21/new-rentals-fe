import {MatTableDataSource} from "@angular/material/table";
import {User, UserFilterAttributes} from "@new-rentals/shared";

export interface UserStoreState {
  users: User[];
  userFilters: UserFilterAttributes;
  usersTableData: MatTableDataSource<User>
}

export enum UserStoreEnum {
  USERS = 'users',
  USER_FILTERS = 'userFilters',
  USER_TABLE_DATA = 'usersTableData'
}
