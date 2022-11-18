import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserManagementComponent} from "../user-management/user-management.component";
import {RouterOutlet} from "@angular/router";
import {AppUserManagementRoutingModule} from "../app-user-management-routing/app-user-management-routing.module";



@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    AppUserManagementRoutingModule
  ]
})
export class AppUserManagementModule { }
