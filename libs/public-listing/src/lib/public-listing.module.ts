import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatListsComponent } from './components/flat-lists/flat-lists.component';
import { FlatDetailsComponent } from './components/flat-details/flat-details.component';
import {GoogleMap, GoogleMapsModule} from "@angular/google-maps";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, GoogleMapsModule, FlexModule, MatInputModule, MatIconModule, MatSelectModule, MatCardModule, MatButtonModule],
  declarations: [FlatListsComponent, FlatDetailsComponent],
})
export class PublicListingModule {}
