import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchHomeComponent } from './components/landing-page/search-home/search-home.component';
import { FeaturedApartmentsComponent } from './components/landing-page/featured-apartments/featured-apartments.component';
import { RentalSolutionSectionComponent } from './components/landing-page/rental-solution-section/rental-solution-section.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqSectionsComponent } from './components/landing-page/faq-sections/faq-sections.component';
import { MatSelectModule } from '@angular/material/select';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { OurUniqueFeatureComponent } from './components/landing-page/our-unique-feature/our-unique-feature.component';
import { LetsTalkComponent } from './components/landing-page/lets-talk/lets-talk.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";

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
        MatSelectModule,
        GooglePlaceModule,
        RouterLinkWithHref,
        RouterLinkActive,
        MatSidenavModule,
        MatMenuModule,
    ],
  declarations: [
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    LandingPageComponent,
    SearchHomeComponent,
    FeaturedApartmentsComponent,
    RentalSolutionSectionComponent,
    FaqSectionsComponent,
    OurUniqueFeatureComponent,
    LetsTalkComponent,
  ],
  exports: [LayoutComponent, NavBarComponent],
})
export class LayoutModule {}
