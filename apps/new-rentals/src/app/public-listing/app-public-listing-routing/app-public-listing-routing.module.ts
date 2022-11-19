import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShellModule, ShellService} from "@new-rentals/shell";
import {RouterModule, Routes} from "@angular/router";
import {FlatListsComponent, PublicListingModule} from "@new-rentals/public-listing";
import {FlatDetailsComponent} from "@new-rentals/shared";

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'list',
      component: FlatListsComponent
    },
    {path: 'detail',
    component: FlatDetailsComponent
    }
  ])
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShellModule,
    PublicListingModule,
    RouterModule.forChild(routes)
  ]
})
export class AppPublicListingRoutingModule { }
