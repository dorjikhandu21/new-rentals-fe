import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent, AuthModule} from "@new-rentals/auth";
import {RouterModule, Routes} from "@angular/router";
import {AuthWrapperComponent} from "../auth-wrapper/auth-wrapper.component";

const routes: Routes = [
  {
    path: '',
    component: AuthWrapperComponent,
    children: [
      {
        path: '',
        component: AuthComponent,
        data: {
          TYPE: 'login'
        },
      },
      {
        path: 'signup',
        component: AuthComponent,
        data: {
          TYPE: 'signup'
        }
  }]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, AuthModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class AppAuthRoutingModule { }
