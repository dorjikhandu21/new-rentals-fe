import {MatTableDataSource} from "@angular/material/table";
import {User} from "@new-rentals/shared";

export interface UserStoreState {
  users: User[];
  usersTableData: MatTableDataSource<User>
}

export enum UserStoreEnum {
  USERS = 'users',
  USER_TABLE_DATA = 'usersTableData'
}
