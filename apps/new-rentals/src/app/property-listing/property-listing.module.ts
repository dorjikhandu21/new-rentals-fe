import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPropertyListingComponent } from './app-property-listing.component';
import {RouterOutlet} from "@angular/router";
import {PropertyListingRoutingModule} from "./property-listing-routing.module";

@NgModule({
  declarations: [AppPropertyListingComponent],
    imports: [CommonModule, RouterOutlet, PropertyListingRoutingModule],
})
export class PropertyListingModule {}
