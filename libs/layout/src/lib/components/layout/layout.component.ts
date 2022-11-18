import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-rentals-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
  };
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
