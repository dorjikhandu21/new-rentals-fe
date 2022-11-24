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

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        TranslateModule,
        MatSnackBarModule,
        FlexLayoutModule,
    ],
    declarations: [
        AdvancedFilterComponent,
        NavBarComponent,
        NotificationComponent,
        SearchBarComponent,
        PublicListingComponent,
        FlatDetailsComponent,
        FilePickerComponent,
    ],
    exports: [
        FilePickerComponent
    ]
})
export class SharedModule {}
