import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-rentals-featured-apartments',
  templateUrl: './featured-apartments.component.html',
  styleUrls: ['./featured-apartments.component.scss'],
})
export class FeaturedApartmentsComponent implements OnInit {
  cards:any[] =  [
    {name: 'Empty Flat in Babesa', img: 'flat.svg', value: 'Babesa, Highway Express, Thimphu'},
    {name: 'House For exchange', img: 'flat2.jpg', value: 'Changzamto, Highway Express, Thimphu '},
    {name: 'Free House for Rent', img: 'flat3.jpg', value: 'Taba, Highway Express, Thimphu '},
    {name: 'Empty Duplex for Rent', img: 'flat4.jpg', value: 'Town, Highway Express, Thimphu '},
    {name: 'Flat for sale', img: 'flat5.png', value: 'Chubachu, Highway Express, Thimphu '},
    {name: 'Flat for sale', img: 'flat6.svg', value: 'Babesa, Highway Express, Thimphu '},
  ];
  constructor() {}

  ngOnInit(): void {}
}
