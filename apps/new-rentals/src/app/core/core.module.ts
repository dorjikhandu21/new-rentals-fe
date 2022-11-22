import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, UrlSerializer} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticatedGuard} from "../guards/authenticated.guard";
import {ENV_TOKEN} from "@new-rentals/auth";
import {environment} from "../../environments/environment";
import {PropertyListingModule} from "@new-rentals/property-listing";
import {LayoutComponent} from "@new-rentals/layout";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'auth',
    loadChildren: () => import('../auth/app-auth/app-auth.module').then(m => m.AppAuthModule),
    canActivate: []
  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: []
  },
  {
    path: 'users',
    loadChildren: () => import('../user-management/app-user-management/app-user-management.module').then(m => m.AppUserManagementModule),
    canActivate: []
  },
  {
    path: 'home',
    loadChildren: () => import('../public-listing/public-listing/public-listing.module').then(m => m.PublicListingModule)
  },
  // {
  //   path: '**',
  //   redirectTo: 'home'
  // },
  {
    path: 'properties',
    loadChildren: () => import('../property-listing/property-listing.module').then(m => m.PropertyListingModule),
    canActivate: []
  },

  {
    path: 'maintenance',
    loadChildren: () => import('../maintenance/maintenance.module').then(m => m.MaintenanceModule),
    canActivate: []
  },
  {
    path: 'applications',
    loadChildren: () => import('../applications/applications.module').then(m => m.ApplicationsModule),
    canActivate: []
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

export function malformedErrHandler(error: URIError, urlSerializer: UrlSerializer, url: string) {
  window.location.replace('404');
  return urlSerializer.parse('/404');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      malformedUriErrorHandler: malformedErrHandler
    })
  ],
  providers: [AuthenticatedGuard]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
