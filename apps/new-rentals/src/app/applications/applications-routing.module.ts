import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShellModule, ShellService} from "@new-rentals/shell";
import {RouterModule, Routes} from "@angular/router";
import {ApplicationListComponent, ApplicationsModule} from "@new-rentals/applications";
import {ApplicationsComponent} from "./applications.component";

const routes: Routes = [

ShellService.childRoutes([
    {
      path: '',
      component: ApplicationsComponent,
      canActivate: [],
      data: {
        breadCrumb: 'application'
      },
      children: [
        {
          path: '',
          component: ApplicationListComponent
        }
      ]
    }
  ])
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShellModule,
    RouterModule.forChild(routes),
    ApplicationsModule
  ]
})
export class ApplicationsRoutingModule { }
