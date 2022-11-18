import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchHomeComponent } from './components/landing-page/search-home/search-home.component';
import { FeaturedApartmentsComponent } from './components/landing-page/featured-apartments/featured-apartments.component';
import { RentalSolutionSectionComponent } from './components/landing-page/rental-solution-section/rental-solution-section.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    imports: [
        CommonModule,
        GoogleMapsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule,
    ],
  declarations: [
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    LandingPageComponent,
    SearchHomeComponent,
    FeaturedApartmentsComponent,
    RentalSolutionSectionComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
