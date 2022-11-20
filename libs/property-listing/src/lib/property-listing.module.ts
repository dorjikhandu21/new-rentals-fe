import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { propertyListingRoutes } from './lib.routes';
import { PropertyListingComponent } from './components/property-listing/property-listing.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {GoogleMapsModule} from "@angular/google-maps";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [CommonModule, RouterModule, FlexLayoutModule, MatInputModule, MatSelectModule, GoogleMapsModule, MatCardModule, MatIconModule, MatButtonModule],
  declarations: [PropertyListingComponent, PropertyDetailsComponent],
})
export class PropertyListingModule {}
