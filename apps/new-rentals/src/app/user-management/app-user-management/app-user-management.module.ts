import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserManagementComponent} from "../user-management/user-management.component";
import {RouterOutlet} from "@angular/router";
import {AppUserManagementRoutingModule} from "../app-user-management-routing/app-user-management-routing.module";
import {LayoutModule} from "@new-rentals/layout";



@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    AppUserManagementRoutingModule,
    LayoutModule
  ]
})
export class AppUserManagementModule { }
