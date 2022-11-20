import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { applicationsRoutes } from './lib.routes';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatBadgeModule } from '@angular/material/badge';
import { ApplicationDetailModalComponent } from './components/application-detail-modal/application-detail-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {TranslateModule} from "@ngx-translate/core";
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from "@angular/material/tabs";
import {MatChipsModule} from "@angular/material/chips";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    DragDropModule,
    MatBadgeModule,
    MatDialogModule,
    TranslateModule,
    MatDividerModule,
    MatTabsModule,
    MatChipsModule,
    MatMenuModule
  ],
  declarations: [ApplicationListComponent, ApplicationDetailModalComponent],
  entryComponents: [ApplicationDetailModalComponent]
})
export class ApplicationsModule {}
