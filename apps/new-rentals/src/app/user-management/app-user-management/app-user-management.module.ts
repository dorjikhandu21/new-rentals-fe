import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserManagementComponent} from "../user-management/user-management.component";
import {RouterOutlet} from "@angular/router";
import {AppUserManagementRoutingModule} from "../app-user-management-routing/app-user-management-routing.module";
import {LayoutModule} from "@new-rentals/layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SharedModule} from "@new-rentals/shared";



@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    AppUserManagementRoutingModule,
    LayoutModule,
    MatFormFieldModule,
    FlexModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    SharedModule
  ]
})
export class AppUserManagementModule { }
