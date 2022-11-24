import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Address} from "ngx-google-places-autocomplete/objects/address";
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'new-rentals-property-location',
  templateUrl: './property-location.component.html',
  styleUrls: ['./property-location.component.scss'],
})
export class PropertyLocationComponent implements OnInit {
  @Input() geoInformation?:FormGroup;
  private map: google.maps.Map;
  position: { lat: number; lng: number; } = {lat: 27.4716, lng: 89.6386};
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    scrollwheel: true,
    disableDoubleClickZoom: true,
    zoom: 15,
    disableDefaultUI: true
  };

  constructor() {}

  ngOnInit(): void {
    // this.loadMap();
  }

  loadMap(): void {
    const loader: Loader = new Loader({
      apiKey: 'AIzaSyDpNbirRykNtf26goqNIwT4diZcsIP-vy4',
    })
    loader.load().then(() => {
      this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: this.position,
        scrollwheel: true,
        disableDoubleClickZoom: true,
        zoom: 5,
        disableDefaultUI: true,
      });
    }).catch(error => {
      console.log('Maps could not load')
    })
  }


  geoCode(event: Address): void {
    this.position = {lat: event.geometry.location.lat(), lng: event.geometry.location.lng()}
    this.addMarker();
  }

  addMarker(): void {
    const marker = new google.maps.Marker({
      position: this.position,
      map: this.map
    })
  }
}
