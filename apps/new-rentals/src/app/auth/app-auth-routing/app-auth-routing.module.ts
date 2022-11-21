import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent, AuthModule} from "@new-rentals/auth";
import {RouterModule, Routes} from "@angular/router";
import {AuthWrapperComponent} from "../auth-wrapper/auth-wrapper.component";

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'auth/login'
  // },
  {
    path: '',
    component: AuthWrapperComponent,
    children: [
      {
        path: '',
        component: AuthComponent,
        data: {
          type: 'login'
        },
      },
      {
        path: 'signup',
        component: AuthComponent,
        canActivate: [],
        data: {
          type: 'signup'
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
