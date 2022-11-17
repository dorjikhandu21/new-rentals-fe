import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthWrapperComponent} from "../auth-wrapper/auth-wrapper.component";
import {AppAuthRoutingModule} from "../app-auth-routing/app-auth-routing.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [AuthWrapperComponent],
  imports: [
    CommonModule, AppAuthRoutingModule, RouterModule
  ]
})
export class AppAuthModule { }
