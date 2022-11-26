import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShellModule, ShellService} from "@new-rentals/shell";
import {
  PropertyDetailsComponent,
  PropertyListingComponent,
  PropertyListingModule,
  PropertyListingStepperComponent
} from "@new-rentals/property-listing";
import {AppPropertyListingComponent} from "./app-property-listing.component";

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: '',
      component: AppPropertyListingComponent,
      canActivate: [],
      data: {
        breadCrumb: 'property-list'
      },
      children: [
        {
          path: '',
          component: PropertyListingComponent,
        },
        {
          path: 'add',
          component: PropertyListingStepperComponent,
        },
        {
          path: ':id',
          component: PropertyDetailsComponent,
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
    PropertyListingModule,
    ShellModule
  ]
})
export class PropertyListingRoutingModule { }
