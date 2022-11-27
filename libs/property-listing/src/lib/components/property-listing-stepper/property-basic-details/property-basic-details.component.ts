import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {PropertyFacadeService} from "../../../services/property-facade.service";

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
  }
}
