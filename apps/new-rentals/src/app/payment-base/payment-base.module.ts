import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentBaseComponent } from './payment-base.component';
import {RouterOutlet} from "@angular/router";
import {PaymentBaseRoutingModule} from "./payment-base-routing.module";

@NgModule({
  declarations: [PaymentBaseComponent],
    imports: [CommonModule, RouterOutlet, PaymentBaseRoutingModule],
})
export class PaymentBaseModule {}
