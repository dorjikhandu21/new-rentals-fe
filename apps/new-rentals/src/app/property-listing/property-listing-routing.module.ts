import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShellService} from "@new-rentals/shell";
import {
  PropertyListingComponent,
  PropertyListingModule,
  PropertyListingStepperComponent
} from "@new-rentals/property-listing";

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: '',
      component: PropertyListingComponent,
      canActivate: [],
      data: {
        breadCrumb: 'property-list'
      },
      children: [
        {
          path: 'list',
          component: PropertyListingComponent,
        },
        {
          path: 'add',
          component: PropertyListingStepperComponent,
        }
      ],

    }
  ])
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PropertyListingModule
  ]
})
export class PropertyListingRoutingModule { }
