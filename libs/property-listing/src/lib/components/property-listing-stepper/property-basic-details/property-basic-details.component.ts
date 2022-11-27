import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { FormGroup} from "@angular/forms";
import {PropertyFacadeService} from "../../../services/property-facade.service";
import {OccupancyTypeEnum, UploadAsEnum} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-property-basic-details',
  templateUrl: './property-basic-details.component.html',
  styleUrls: ['./property-basic-details.component.scss'],
})
export class PropertyBasicDetailsComponent implements OnInit {
  @Input() basicDetail?: FormGroup;
  occupancyTypeEnum = OccupancyTypeEnum;
  uploadAsEnum = UploadAsEnum;
  selectedClass: any = {
    owner: true,
    multi_family_home: true,
  }
  @ViewChild('fileUpload', {static: false}) fileUpload?: ElementRef;
  constructor(private propertyFacadeService: PropertyFacadeService) {}

  ngOnInit(): void {
  }

  setOccupancyType(value: OccupancyTypeEnum): void {
    this.selectedClass.multi_family_home = value === this.occupancyTypeEnum.MultiFamilyHome;
    this.basicDetail?.get('occupancyType')?.patchValue(value);
  }

  setUploadAs(value: UploadAsEnum): void {
    this.selectedClass.owner = value === this.uploadAsEnum.Owner;
    this.basicDetail?.get('uploadAs')?.patchValue(value);
  }
}
