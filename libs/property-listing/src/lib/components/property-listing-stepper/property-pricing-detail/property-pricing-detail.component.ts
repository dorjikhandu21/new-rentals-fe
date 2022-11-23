import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'new-rentals-property-pricing-detail',
  templateUrl: './property-pricing-detail.component.html',
  styleUrls: ['./property-pricing-detail.component.scss'],
})
export class PropertyPricingDetailComponent implements OnInit {
  @Input() unitDetails?:FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
