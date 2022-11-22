import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-rentals-property-location',
  templateUrl: './property-location.component.html',
  styleUrls: ['./property-location.component.scss'],
})
export class PropertyLocationComponent implements OnInit {
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
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
        "color": "#D7385E",
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
        "color": "#D7385E",
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
        "color": "#D7385E",
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
        "color": "#D7385E",
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
        "color": "#D7385E",
        "text": "Marker label 7"
      },
      "title": "Marker title 7",
      "info": "Marker info 7",
      "options": {
        "animation": 2
      }
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
