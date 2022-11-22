import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { propertyListingRoutes } from './lib.routes';
import { PropertyListingComponent } from './components/property-listing/property-listing.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PropertyListingStepperComponent } from './components/property-listing-stepper/property-listing-stepper.component';
import { PropertyBasicDetailsComponent } from './components/property-listing-stepper/property-basic-details/property-basic-details.component';
import { PropertyLocationComponent } from './components/property-listing-stepper/property-location/property-location.component';
import { PropertyPricingDetailComponent } from './components/property-listing-stepper/property-pricing-detail/property-pricing-detail.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { StepperButtonsComponent } from './components/property-listing-stepper/stepper-buttons/stepper-buttons.component';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatInputModule,
        MatSelectModule,
        GoogleMapsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        MatStepperModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatTabsModule,
    ],
  declarations: [
    PropertyListingComponent,
    PropertyDetailsComponent,
    PropertyListingStepperComponent,
    PropertyBasicDetailsComponent,
    PropertyLocationComponent,
    PropertyPricingDetailComponent,
    StepperButtonsComponent,
  ],
})
export class PropertyListingModule {}
