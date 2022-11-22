import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { InviteTenantModalComponent } from './components/invite-tenant-modal/invite-tenant-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatDialogModule,
        ReactiveFormsModule,
        TranslateModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule
    ],
  declarations: [UserListingComponent, InviteTenantModalComponent],
  exports: [UserListingComponent],
  entryComponents: [InviteTenantModalComponent],
})
export class UserManagementModule {}
