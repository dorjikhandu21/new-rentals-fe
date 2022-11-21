import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShellModule, ShellService} from "@new-rentals/shell";
import {RouterModule, Routes} from "@angular/router";
import {FlatListsComponent, PublicListingModule} from "@new-rentals/public-listing";
import {FlatDetailsComponent} from "@new-rentals/shared";
import {HomeComponent} from "../home/home.component";

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'list',
          component:FlatListsComponent
        },
        {path: 'list/:id',
          component: FlatDetailsComponent
        }
      ]
    },
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
