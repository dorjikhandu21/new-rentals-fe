import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GraphQLModule} from "./graphql.module";
import {RouterOutlet} from "@angular/router";
import {CoreModule} from "./core";
import {GoogleMapsModule} from "@angular/google-maps";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {TranslateModule} from "@ngx-translate/core";
import {ENV_TOKEN} from "@new-rentals/auth";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, GraphQLModule, RouterOutlet, CoreModule, GoogleMapsModule, MatSnackBarModule, TranslateModule.forRoot()],
  providers: [{
    provide: ENV_TOKEN,
    useValue: environment
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
