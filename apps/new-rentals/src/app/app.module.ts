import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GraphQLModule} from "./graphql.module";
import {RouterOutlet} from "@angular/router";
import {CoreModule} from "./core";
import {GoogleMap} from "@angular/google-maps";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {TranslateModule} from "@ngx-translate/core";
import {AuthService, ENV_TOKEN} from "@new-rentals/auth";
import {environment} from "../environments/environment";
import {SwUpdate} from "@angular/service-worker";
import {GooglePlaceModule} from "ngx-google-places-autocomplete";
import {HttpClientJsonpModule} from "@angular/common/http";
import {HomeComponent} from "./public-listing/home/home.component";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent],
  imports: [BrowserModule, HttpClientJsonpModule,GooglePlaceModule, BrowserAnimationsModule, GraphQLModule, RouterOutlet, CoreModule, MatSnackBarModule, TranslateModule.forRoot()],
  providers: [{
    provide: ENV_TOKEN,
    useValue: environment
  },{
    provide: SwUpdate,
    useValue: SwUpdate
  },
    {provide: AuthService, useClass: AuthService},
    {
      provide: GoogleMap, useValue: GoogleMap
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
