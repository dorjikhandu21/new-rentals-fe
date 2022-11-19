import {Component, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow} from "@angular/google-maps";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'new-rentals-flat-lists',
  templateUrl: './flat-lists.component.html',
  styleUrls: ['./flat-lists.component.scss'],
})

export class FlatListsComponent implements OnInit {
  @ViewChild(GoogleMap) map!: GoogleMap;
  // @ViewChild(MapInfoWindow) infoWindow?: MapInfoWindow;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow?: MapInfoWindow;

  filters: any[] = [
    {name: 'Type', icon: 'category'},
    {name: 'Price', icon: 'attach_money'},
    {name: 'Move In Date', icon: 'calendar_month'},
    {name: 'No. of beds', icon: 'account_tree'},
    {name: 'More Filters', icon: 'tune'}
  ];

  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    // zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    zoom: 15,
    disableDefaultUI: true
  };

  markers: any[] = [
    {
      "position": {
        "lat": 27.474925998493138,
        "lng": 89.64200758778681
      },
      "label": {
        "color": "blue",
        "text": "Marker label 1"
      },
      "title": "Marker title 1",
      "info": "Marker info 1",
      "options": {
        "animation": 2
      }
    },
    {
      "position": {
        "lat": 27.472603396354472,
        "lng": 89.63921809041132
      },
      "label": {
        "color": "blue",
        "text": "Marker label 4"
      },
      "title": "Marker title 4",
      "info": "Marker info 4",
      "options": {
        "animation": 2
      }
    },
    {
      "position": {
        "lat": 27.470966122805464,
        "lng": 89.63921809041132
      },
      "label": {
        "color": "blue",
        "text": "Marker label 5"
      },
      "title": "Marker title 5",
      "info": "Marker info 5",
      "options": {
        "animation": 2
      }
    },
    {
      "position": {
        "lat": 27.47083285528322,
        "lng": 89.63816666447748
      },
      "label": {
        "color": "blue",
        "text": "Marker label 6"
      },
      "title": "Marker title 6",
      "info": "Marker info 6",
      "options": {
        "animation": 2
      }
    },
    {
      "position": {
        "lat": 27.471384962540522,
        "lng": 89.63241600834955
      },
      "label": {
        "color": "blue",
        "text": "Marker label 7"
      },
      "title": "Marker title 7",
      "info": "Marker info 7",
      "options": {
        "animation": 2
      }
    }
  ];
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.center = {lat: 27.4716, lng: 89.6386};
  }

  dropMarker(event:any): void {
    this.markers.push({
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      label: {
        color: 'blue',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    })
  }

  // mapClick(event: any): void {
  //   this.dropMarker(event)
  // }

  openInfoWindow(marker: any): void {
    // @ts-ignore
    this.infoWindow.open();
  }

}
