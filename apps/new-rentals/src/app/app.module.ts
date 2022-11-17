import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GraphQLModule} from "./graphql.module";
import {RouterOutlet} from "@angular/router";
import {CoreModule} from "./core";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, GraphQLModule, RouterOutlet, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
