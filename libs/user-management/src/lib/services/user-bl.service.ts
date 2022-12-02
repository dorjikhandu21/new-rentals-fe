import { Injectable } from '@angular/core';
import {User} from "@new-rentals/shared";
import {UserTableData} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserBlService {

  constructor() { }

  getTableDataSource(users: User[]): UserTableData[] {
    // @ts-ignore
    return users.map(user => ({
      id: user.id,
      role: user.role.roleName,
      name: user.profile?.fullName,
      email: user?.email,
      phone: user?.profile?.phone,
      building_name: '',
      apartments: '',
      status: user.status
    }))
  }
}
