import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { paymentRoutes } from './lib.routes';
import { PaymentComponent } from './components/payment/payment.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule, MatFormFieldModule, MatIconModule, MatSelectModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule],
  declarations: [PaymentComponent],
})
export class PaymentModule {}
