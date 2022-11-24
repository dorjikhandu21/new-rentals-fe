import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {PropertyFacadeService} from "../../../services/property-facade.service";
import {CategoryEnum} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-property-basic-details',
  templateUrl: './property-basic-details.component.html',
  styleUrls: ['./property-basic-details.component.scss'],
})
export class PropertyBasicDetailsComponent implements OnInit {
  @Input() basicDetail?: FormGroup;
  @ViewChild('fileUpload', {static: false}) fileUpload?: ElementRef;
  constructor(private propertyFacadeService: PropertyFacadeService) {}

  ngOnInit(): void {
    debugger
  }

  selectFile(event: Event): void {
    const attachments: FormArray = this.basicDetail?.get('attachments') as FormArray;
    attachments.push({
      category: new FormControl(CategoryEnum.Property),
      // @ts-ignore
      file: new FormControl(event?.target?.['files']?.[0]),
      // @ts-ignore
      fileFileName: new FormControl(event?.target?.['files']?.[0]['name'])
    })
  }
}
