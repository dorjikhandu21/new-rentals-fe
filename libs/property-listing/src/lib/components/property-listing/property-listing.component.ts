import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyFacadeService} from "../../services/property-facade.service";
import {PropertyStoreEnum} from "../../models/property.store";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import { switchMap, tap} from "rxjs";
import {PropertiesFilterAttributes, Property, Unit} from "@new-rentals/shared";
import {PropertyBlService} from "../../services/property-bl.service";
import {PageEvent} from "@angular/material/paginator";

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
  properties: Property[] = [];
  propertyFilters: PropertiesFilterAttributes = {
    limitPerPage: 5,
    offsetPage: 0
  }
  // eslint-disable-next-line @typescript-eslint/typedef
  loading = true;
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
    this.propertyFacadeService.updateSpecificState(this.propertyFilters, PropertyStoreEnum.PROPERTY_FILTERS);
  }

  listenToPropertyFilters(): void {
    this.propertyFacadeService.specificStateChange<PropertiesFilterAttributes>(PropertyStoreEnum.PROPERTY_FILTERS).pipe(untilDestroyed(this),switchMap((filters) => {
      return this.propertyFacadeService.getProperties(filters);
    })).subscribe(() => {
      this.loading = false;
    });
  }

  listenToUnitsChange(): void {
    this.propertyFacadeService.specificStateChange<Property[]>(PropertyStoreEnum.PROPERTIES).pipe(untilDestroyed(this), tap((properties) => {
      this.properties = properties;
    })).subscribe();
  }

  routeToPropertyCreation(): void {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  routeToPropertyDetail(property: Property): void {
    void  this.router.navigate([`${property.id}`], {relativeTo: this.route});
  }

  updateFilter(event: PageEvent): void {
    this.propertyFilters = {...this.propertyFilters,
      limitPerPage: event.pageSize,
      offsetPage: event.pageIndex === 0 ? 0 : event.pageSize
    }
    this.propertyFacadeService.updateSpecificState(this.propertyFilters, PropertyStoreEnum.PROPERTY_FILTERS);
  }
}
