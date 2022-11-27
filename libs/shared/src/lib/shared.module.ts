import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedFilterComponent } from './components/advanced-filter/advanced-filter.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PublicListingComponent } from './components/public-listing/public-listing.component';
import { FlatDetailsComponent } from './components/flat-details/flat-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilePickerComponent } from './components/file-picker/file-picker.component';
import { LoaderComponent } from './components/loader/loader.component';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {GalleryModule} from "ng-gallery";
import {LightboxModule} from "ng-gallery/lightbox";
import {ApplyTenantModalComponent} from "./components/apply-tenant-modal/apply-tenant-modal.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule,
    MatSnackBarModule,
    FlexLayoutModule,
    GoogleMapsModule,
    MatButtonModule,
    MatMenuModule,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
    declarations: [
        AdvancedFilterComponent,
        NavBarComponent,
        NotificationComponent,
        SearchBarComponent,
        PublicListingComponent,
        FlatDetailsComponent,
        FilePickerComponent,
    LoaderComponent,
    EmptyPageComponent, ApplyTenantModalComponent
  ],
  exports: [FilePickerComponent, LoaderComponent, EmptyPageComponent],
  providers: [],
  entryComponents: [ApplyTenantModalComponent]
})
export class SharedModule {}
