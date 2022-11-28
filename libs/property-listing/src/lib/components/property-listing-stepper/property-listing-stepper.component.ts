import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {PropertyFacadeService} from "../../services/property-facade.service";
import {CredentialsService, Property, UnitAttributes} from "@new-rentals/shared";
import {PropertyStoreEnum} from "../../models/property.store";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {Router} from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'new-rentals-property-listing-stepper',
  templateUrl: './property-listing-stepper.component.html',
  styleUrls: ['./property-listing-stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class PropertyListingStepperComponent implements OnInit {
  basicDetail?: FormGroup;
  geoInformation?: FormGroup;
  // @ts-ignore
  units: FormArray = new FormArray([]);
  constructor(private propertyFacadeService: PropertyFacadeService, private router: Router, private credentialsService: CredentialsService) {}

  ngOnInit(): void {
    this.buildForm();
    this.listenToPropertyChanges();
  }

  // eslint-disable-next-line max-lines-per-function
  buildForm(): void {
    this.basicDetail = new FormGroup({
      id: new FormControl(''),
      propertyType: new FormControl('', Validators.required),
      propertyName: new FormControl('', Validators.required),
      normalAmenities: new FormArray([]),
      occupancyType: new FormControl('multi_family_home', Validators.required),
      uploadAs: new FormControl('owner', Validators.required),
      propertyDescription: new FormControl('', Validators.required),
      specialAmenities: new FormArray([]),
      units: new FormArray([]),
      attachments: new FormArray([]),
    });

    this.geoInformation = new FormGroup({
      lat: new FormControl('', Validators.required),
      lng: new FormControl('', Validators.required),
    });
  }

  createProperty(): void {
    this.basicDetail?.valid &&
    this.propertyFacadeService.createProperty({...this.basicDetail?.value, units: this.units.value, lat: this.geoInformation?.value.lat.toString(), lng: this.geoInformation?.value.lng.toString(), ownerId: this.credentialsService.currentUser().id}).toPromise().then(() => {
      this.router.navigate(['properties']);
    });
  }

  listenToPropertyChanges(): void {
    this.propertyFacadeService.specificStateChange<Property>(PropertyStoreEnum.PROPERTY).pipe(untilDestroyed(this), tap((property) => {
      this.patchForm(property);
    })).subscribe();
  }

  patchForm(property: Property): void {
    this.basicDetail?.patchValue(property);
  }
}
