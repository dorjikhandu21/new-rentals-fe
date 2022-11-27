import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {cloneDeep} from "lodash-es";
import {Unit} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-property-pricing-detail',
  templateUrl: './property-pricing-detail.component.html',
  styleUrls: ['./property-pricing-detail.component.scss'],
})
export class PropertyPricingDetailComponent implements OnInit {
  @Input() units?:FormArray;
  unitForm: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit(): void {
    this.addUnitControl();
  }

  addUnitControl(): void {
     this.unitForm = new FormGroup({
       monthlyRent: new FormControl('', Validators.required),
       nosOfBath: new FormControl(1, [Validators.required, Validators.min(1)]),
       nosOfBed: new FormControl(1, Validators.required),
       occupied: new FormControl(false, [Validators.required, Validators.min(1)]),
       unitDescription: new FormControl(''),
       unitNumber: new FormControl('', Validators.required),
       normalAmenities: new FormArray([]),
       attachments: new FormArray([])
    });
     this.units?.push(this.unitForm);
  }

  copyUnit(index: number): void {
    const valuesToCopy: Unit = cloneDeep(this.units?.at(index).value);
    this.unitForm?.setValue(valuesToCopy);
    this.units?.push(this.unitForm);
  }

  deleteUnit(index: number): void {
    this.units?.removeAt(index);
  }

  minusSpacesCount(unit: FormGroup, space: { label: string, value: string }): void {
    const value: number = unit?.get(space.value)?.value;
    unit.get(space.value)?.setValue(value <=1? 1 : value - 1);
  }

  addSpacesCount(unit: FormGroup, space: { label: string, value: string }): void {
    const value: number = unit?.get(space.value)?.value;
    unit.get(space.value)?.setValue(value <= 9 ? value + 1 : value);
  }
}
