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
  markers: google.maps.Marker[] = [];
  position: { lat: number; lng: number; } = {lat: 27.4716, lng: 89.6386};
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    center: this.position,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    zoom: 14,
    disableDefaultUI: true
  };

  constructor() {}

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap(): void {
    const loader: Loader = new Loader({
      apiKey: 'AIzaSyDpNbirRykNtf26goqNIwT4diZcsIP-vy4',
    })
    loader.load().then(() => {
      this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, this.options);
    }).catch(error => {
      console.log('Maps could not load', error);
    })
  }

  geoCode(event: Address): void {
    this.position = {lat: event.geometry.location.lat(), lng: event.geometry.location.lng()}
    this.setGeoInfo();
    this.addMarker(this.position);
    this.map.setCenter(this.position);
    this.map.setZoom(14);
  }

  addMarker(position: google.maps.LatLng | google.maps.LatLngLiteral): void {
    const marker: google.maps.Marker = new google.maps.Marker({position, map: this.map, draggable: true});
    this.deletePreviousMarkers();
    this.markers.push(marker);
    this.setMapOnAll(this.map);
    this.addDragEndListener(marker);
  }

  addDragEndListener(marker: google.maps.Marker): void {
    google.maps.event.addListener(marker,'dragend', (event) => {
      this.position = {lat: event.latLng.lat(), lng: event.latLng.lng()};
      this.map.setCenter(this.position);
      this.setGeoInfo();
    });
  }

   setMapOnAll(map: google.maps.Map | null): void {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  deletePreviousMarkers(): void {
    this.setMapOnAll(null);
    this.markers = [];
  }

  setGeoInfo(): void {
    this.geoInformation?.setValue(this.position);
  }
}
