import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'new-rentals-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  @ViewChild(MatSidenav, { static: false })sideNav: MatSidenav;

  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
  };
  navBar: { name: string, link: string}[] = [
    {name: 'Featured Apartments', link: 'featured-apartments'},
    {name: 'Rental Solution', link: 'rental-solution'},
    {name: 'Main Service', link: 'main-services'},
    {name: 'FAQ', link: 'faq'},
    {name: 'Contact Us', link: 'contact-us'},
  ];

  constructor() {}

  ngOnInit(): void {
    this.center = {lat: 27.4716, lng: 89.6386};
    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   };
    // });
  }

  mapClick(event: any): void {
    debugger
  }

}
