import {Component, OnInit, ViewChild} from '@angular/core';
import {MapInfoWindow} from "@angular/google-maps";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Loader} from "@googlemaps/js-api-loader";
import {
  CredentialsService,
  geocodeLatLng,
  SharedApiService,
  SharedFacadeService,
  SharedStoreStateEnum,
  Unit
} from "@new-rentals/shared";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {switchMap, tap} from "rxjs";
import {UnitFacadeService} from "../services/unit-facade.service";

@UntilDestroy()
@Component({
  selector: 'new-rentals-flat-lists',
  templateUrl: './flat-lists.component.html',
  styleUrls: ['./flat-lists.component.scss'],
})

export class FlatListsComponent implements OnInit {
  // @ts-ignore
  units: Unit[] = [];
  private map: google.maps.Map;
  @ViewChild(MapInfoWindow, {static: false}) infoWindow?: MapInfoWindow;
  filters: any[] = [
    {name: 'Type', icon: 'category'},
    {name: 'Price', icon: 'attach_money'},
    {name: 'No. of beds', icon: 'account_tree'}
  ];

  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    scrollwheel: true,
    disableDoubleClickZoom: true,
    zoom: 6,
    disableDefaultUI: true
  };

  markers: any[] = [];

  constructor(private httpClient: HttpClient, private credentialsService: CredentialsService, private router: Router, private route: ActivatedRoute, private sharedFacadeService: SharedFacadeService, private unitFacadeService: UnitFacadeService) {
  }

  ngOnInit(): void {
    this.center = {lat: 27.4288601, lng: 89.6532514};
    this.sharedFacadeService.updateSpecificState({}, SharedStoreStateEnum.GEO_CODING_FILTERS);
    this.listenToApartmentListingFilters();
    this.loadMap();
    this.sharedFacadeService.updateSpecificState(true, SharedStoreStateEnum.SHOW_SEARCH_BAR);
  }

  listenToApartmentListingFilters(): void {
    this.sharedFacadeService.specificStateChange(SharedStoreStateEnum.GEO_CODING_FILTERS).pipe(untilDestroyed(this), switchMap(() => this.unitFacadeService.getUnits()), tap((units) => {
      this.units = units;
      this.setMapCenter(units);
      this.units.forEach(unit => {
        this.addMarkers(unit);
      })
    })).subscribe();
  }

  setMapCenter(units: Unit[]): void {
    // @ts-ignore
    this.map.setCenter({lat: +units[0]?.property?.lat, lng: +units[0]?.property?.lng});
    this.map.setZoom(14);
  }

  loadMap(): void {
    const loader: Loader = new Loader({
      apiKey: '',
    })
    loader.load().then(() => {
      const position: { lat: number; lng: number; } = {lat: 27.4716, lng: 89.6386};
      this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: position,
        scrollwheel: true,
        disableDoubleClickZoom: true,
        zoom: 15,
        disableDefaultUI: true,
      });
    }).catch(error => {
      console.log('Maps could not load')
    })
  }

  addMarkers(unit: Unit): void {
    const marker = new google.maps.Marker({
      position: {lat: Number(unit.property.lat), lng: Number(unit?.property?.lng)},
      map: this.map
    })
    const url = 'https://newrentals.tk' + unit.attachments[0]?.url;
    const infowindow = new google.maps.InfoWindow({
      maxWidth: 300,
      content: `<div style="width: 100%"><img src="${url}" style="height: 150px; width: 100%; object-fit: cover" alt="">` +
        `<p style="width: 100%; color:#757575; margin-top: 12px;">` +
        `${unit.property.neighbourhoodDetails}</p>` +
        `<p style="width: 100%; color:#757575; margin-top: 12px;">` +
        `${unit.nosOfBed} ${unit?.nosOfBed && unit.nosOfBed > 1 ? 'Beds' : 'Bed'}, ${unit.nosOfBath} ${unit.nosOfBath && unit.nosOfBath > 1 ? 'Baths': 'Bath' }, 2 Corridor</p>` +
        `<p>${unit.monthlyRent}/-</p></div>`,
    });

    marker.addListener('mouseover', () => {
      infowindow.open({
        // @ts-ignore
        anchor: marker,
        map: this.map,
      });
    })

    marker.addListener('mouseout', () => {
      infowindow.close();
    })
  }

  routeToDetails(unit?: Unit): void {
    this.router.navigate([`${unit?.id}`], {relativeTo: this.route})
  }

}
