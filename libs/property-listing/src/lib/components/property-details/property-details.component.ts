import { Component, OnInit } from '@angular/core';
import {PropertyFacadeService} from "../../services/property-facade.service";
import {ActivatedRoute} from "@angular/router";
import {PropertyStoreEnum} from "../../models/property.store";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs";
import {geocodeLatLng, Property} from "@new-rentals/shared";

@UntilDestroy()
@Component({
  selector: 'new-rentals-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {
  property?: Property;
  constructor(private propertyFacadeService: PropertyFacadeService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProperty();
    this.listenToPropertyChange();
  }

  getProperty(): void {
    this.propertyFacadeService.getProperty(this.activatedRoute.snapshot.params['id']).subscribe();
  }

  listenToPropertyChange(): void {
    this.propertyFacadeService.specificStateChange<Property>(PropertyStoreEnum.PROPERTY).pipe(untilDestroyed(this), tap((property) => {
      this.property = property;
      this.property?.units?.forEach(unit => {
        // geocodeLatLng(unit);
      });
    })).subscribe();
  }
}
