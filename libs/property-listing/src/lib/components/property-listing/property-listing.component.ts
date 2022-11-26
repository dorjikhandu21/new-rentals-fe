import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyFacadeService} from "../../services/property-facade.service";
import {PropertyStoreEnum} from "../../models/property.store";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {switchMap, tap} from "rxjs";
import {Property, Unit, UnitFilterAttributes} from "@new-rentals/shared";
import {PropertyBlService} from "../../services/property-bl.service";

@UntilDestroy()
@Component({
  selector: 'new-rentals-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class PropertyListingComponent implements OnInit {
  units: Unit[] = [];
  uniqueUnits: Unit[] = [];
  filters: any[] = [
    {name: 'Type', icon: 'category'},
    {name: 'Price', icon: 'attach_money'},
    {name: 'Move In Date', icon: 'calendar_month'},
    {name: 'No. of beds', icon: 'account_tree'},
    {name: 'More Filters', icon: 'tune'}

  ];

  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
  };
  constructor(private router: Router, private route: ActivatedRoute, private propertyFacadeService: PropertyFacadeService, private propertyBlService: PropertyBlService) {}

  ngOnInit(): void {
    this.center = {lat: 27.4716, lng: 89.6386};
    this.updatePropertyFilters();
    this.listenToPropertyFilters();
    this.listenToUnitsChange()
  }

  updatePropertyFilters(): void {
    this.propertyFacadeService.updateSpecificState({}, PropertyStoreEnum.PROPERTY_FILTERS);
  }

  listenToPropertyFilters(): void {
    this.propertyFacadeService.specificStateChange<UnitFilterAttributes>(PropertyStoreEnum.PROPERTY_FILTERS).pipe(untilDestroyed(this),switchMap((filters) => {
      return this.propertyFacadeService.getUnits(filters);
    })).subscribe();
  }

  listenToUnitsChange(): void {
    this.propertyFacadeService.specificStateChange<Unit[]>(PropertyStoreEnum.UNITS).pipe(untilDestroyed(this), tap((units) => {
      this.units = units;
      this.uniqueUnits = this.propertyBlService.getFormattedProperties(units);
      this.units?.forEach(unit => {
        this.geocodeLatLng(unit);
      })
    })).subscribe();
  }

  geocodeLatLng(unit: Unit ): void {
    const geocoder: google.maps.Geocoder = new google.maps.Geocoder();
    // @ts-ignore
    geocoder.geocode({ location: {lat: +unit.property.lat, lng: +unit.property.lng} })
      // @ts-ignore
      .then((response) => {
        if (response.results[0]) {
          // @ts-ignore
          unit['address'] = response.results[0].formatted_address;
        } else console.log("No results found");
      }).catch((e) => window.alert("Geocoder failed due to: " + e));
  }

  routeToPropertyCreation(): void {
    this.router.navigate(['add'], {relativeTo: this.route});
  }
  routeToPropertyDetail(unit: Unit): void {
    void  this.router.navigate([`${unit.id}`], {relativeTo: this.route});
  }
}
