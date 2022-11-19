import { Injectable } from '@angular/core';
import {Route, Routes} from "@angular/router";
import {ShellComponent} from "../components/shell/shell.component";
import {AuthenticatedGuard} from "../../../../../apps/new-rentals/src/app/guards/authenticated.guard";

@Injectable({
  providedIn: 'root'
})
export class ShellService {

  constructor() { }
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      canActivate: [AuthenticatedGuard],
      children: routes,
      data: { reuse: true }
    };
  }
}
