import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import {GoogleMapsModule} from "@angular/google-maps";

@NgModule({
  imports: [CommonModule, GoogleMapsModule],
    declarations: [LayoutComponent, NavBarComponent, FooterComponent],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {}
