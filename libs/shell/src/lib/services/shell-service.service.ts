import { Injectable } from '@angular/core';
import {Route, Routes} from "@angular/router";
import {ShellComponent} from "../components/shell/shell.component";

@Injectable({
  providedIn: 'root'
})
export class ShellServiceService {

  constructor() { }
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      canActivate: [],
      children: routes,
      data: { reuse: true }
    };
  }
}
