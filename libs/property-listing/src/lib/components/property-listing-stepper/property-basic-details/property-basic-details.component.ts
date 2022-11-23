import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {PropertyFacadeService} from "../../../services/property-facade.service";

@Component({
  selector: 'new-rentals-property-basic-details',
  templateUrl: './property-basic-details.component.html',
  styleUrls: ['./property-basic-details.component.scss'],
})
export class PropertyBasicDetailsComponent implements OnInit {
  @Input() basicDetail?: FormGroup;
  constructor(private propertyFacadeService: PropertyFacadeService) {}

  ngOnInit(): void {}
}
