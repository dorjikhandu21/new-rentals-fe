import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShellService} from "@new-rentals/shell";
import {PaymentBaseComponent} from "./payment-base.component";
import {PaymentComponent, PaymentModule} from "@new-rentals/payment";

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: '',
      component: PaymentBaseComponent,
      canActivate: [],
      data: {
        breadCrumb: 'payment'
      },
      children: [
        {
          path: '',
          component: PaymentComponent,
        }
      ]
    }
  ])
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PaymentModule
  ]
})
export class PaymentBaseRoutingModule { }
