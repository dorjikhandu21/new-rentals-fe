import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import {RouterOutlet} from "@angular/router";
import {ApplicationsRoutingModule} from "./applications-routing.module";
import {LayoutModule} from "@new-rentals/layout";

@NgModule({
  declarations: [ApplicationsComponent],
  imports: [CommonModule, ApplicationsRoutingModule, RouterOutlet, LayoutModule],
})
export class ApplicationsModule {}
