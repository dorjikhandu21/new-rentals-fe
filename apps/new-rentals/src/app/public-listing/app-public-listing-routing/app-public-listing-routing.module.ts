import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShellComponent, ShellModule} from "@new-rentals/shell";
import {RouterModule, Routes} from "@angular/router";
import {FlatListsComponent, PublicListingModule} from "@new-rentals/public-listing";
import {FlatDetailsComponent} from "@new-rentals/shared";

const routes: Routes = [
    {
      path: '',
      component: ShellComponent,
      children: [
        {
          path: 'list',
          component:FlatListsComponent,
          canActivate:[]
        },
        {path: 'list/:id',
          component: FlatDetailsComponent,
          canActivate: []
        }
      ]
    }
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
