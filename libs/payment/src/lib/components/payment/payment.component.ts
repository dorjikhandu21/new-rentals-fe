import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  phone: number;
  unit: string;
  journal: number;
  bank: string;
  received: string;
  month: string;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 800000},
  {name: 'Dechen Singye Choden', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BNB', received: '12-11-22-2022', month: 'May', total: 123323},
  {name: 'Thinley', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'T-BANK', received: '12-11-22-2022', month: 'May', total: 50000},
  {name: 'Dorji Khandu', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BDBL', received: '12-11-22-2022', month: 'May', total: 40000},
  {name: 'Jammei', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000},
  {name: 'Sonam Dorji', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 4000},
  {name: 'Sushmita Rai', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 2003300},
  {name: 'Rinchen Dema', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 4000},
  {name: 'Pema Khando', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 50000},
  {name: 'Peku Peku', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 210000},
  {name: 'Singye Wangchuk', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 300000},
];

@Component({
  selector: 'new-rentals-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'unit', 'journal', 'bank', 'received', 'month', 'total'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
