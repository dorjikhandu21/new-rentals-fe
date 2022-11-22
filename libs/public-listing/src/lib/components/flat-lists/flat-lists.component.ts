import {Component, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from "@angular/google-maps";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Loader} from "@googlemaps/js-api-loader";
import {SharedFacadeService, SharedStoreStateEnum} from "@new-rentals/shared";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs";

@UntilDestroy()
@Component({
  selector: 'new-rentals-flat-lists',
  templateUrl: './flat-lists.component.html',
  styleUrls: ['./flat-lists.component.scss'],
})

export class FlatListsComponent implements OnInit {

   // @ts-ignore

  private map: google.maps.Map;
  // @ViewChild(MapInfoWindow) infoWindow?: MapInfoWindow;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow?: MapInfoWindow;
  id = 1;
  filters: any[] = [
    {name: 'Type', icon: 'category'},
    {name: 'Price', icon: 'attach_money'},
    {name: 'Move In Date', icon: 'calendar_month'},
    {name: 'No. of beds', icon: 'account_tree'},
    {name: 'More Filters', icon: 'tune'}
  ];

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
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute, private sharedFacadeService: SharedFacadeService) {}
  ngOnInit(): void {
    this.center = {lat: 27.4716, lng: 89.6386};
    this.loadMap();
    this.listenToApartmentListingFilters();
  }

  listenToApartmentListingFilters(): void {
    this.sharedFacadeService.specificStateChange(SharedStoreStateEnum.GEO_CODING_FILTERS).pipe(untilDestroyed(this), tap((filters) => {
      debugger
      //query for apartments will happen here
    })).subscribe();
  }

  loadMap(): void {
    const loader: Loader = new Loader({
      apiKey: 'AIzaSyDpNbirRykNtf26goqNIwT4diZcsIP-vy4',
    })
    loader.load().then(() => {
      const position: { lat: number; lng: number; } = {lat: 27.4716, lng: 89.6386};
      this.map = new google.maps.Map(document.getElementById('map') as HTMLElement,{
        center: position,
        scrollwheel: true,
        disableDoubleClickZoom: true,
        zoom: 15,
        disableDefaultUI: true,
      });
      this.addMarkers()
    }).catch(error => {
      console.log('Maps could not load')
    })
  }

  addMarkers(): void {
    const marker = new google.maps.Marker({
      position: this.center,
      map: this.map
    })
    const infowindow = new google.maps.InfoWindow({
      content: 'contentString',
    });

    marker.addListener('mouseover', () => {
      infowindow.open({
        // @ts-ignore
        anchor: marker,
        map: this.map,
      });
    })
    infowindow.addListener('click', () => {
      debugger
      this.routeToDetails()
    })
  }

  dropMarker(event:any): void {
    this.markers.push({
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      label: {
        color: '#D7385E',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    })
  }

  openInfoWindow(marker: any): void {
    // @ts-ignore
    this.infoWindow.open();
  }

  routeToDetails(): void {
    this.router.navigate([`${this.id}`], {relativeTo: this.route})
  }

}
