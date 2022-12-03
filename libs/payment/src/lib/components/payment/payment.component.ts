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
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
  {name: 'Dechen Singye', phone: 17929393, unit: 'Flat 06', journal: 123612, bank: 'BOB', received: '12-11-22-2022', month: 'May', total: 8000000},
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
