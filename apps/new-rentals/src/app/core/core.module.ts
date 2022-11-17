import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, UrlSerializer} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: '**',
    redirectTo: 'login'
  },
  {
    path: '',
    loadChildren: () => import('../auth/app-auth/app-auth.module').then(m => m.AppAuthModule),
    canActivate: []
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
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
