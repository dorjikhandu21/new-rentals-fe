import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserManagementComponent} from "../user-management/user-management.component";
// @ts-ignore
import {UserListingComponent, UserManagementModule} from "@new-rentals/user-management";
import {ShellModule, ShellService} from "@new-rentals/shell";
import {TenantDetailsComponent} from "@new-rentals/user-management";


const routes: Routes = [
  ShellService.childRoutes([
    {
      path: '',
      component: UserListingComponent,
      data: {
        breadCrumb: 'USER_MANAGEMENT'
      },
      children: [
        {
          path: 'user/list',
          component: UserManagementComponent
        },
        {
          path: 'detail',
          component: TenantDetailsComponent
        }
      ]
    }
  ])
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserManagementModule,
    RouterModule.forChild(routes),
    ShellModule
  ]
})
export class AppUserManagementRoutingModule { }
