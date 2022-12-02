import {Component, Input, OnInit} from '@angular/core';
import {Unit} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss'],
})
export class UnitDetailsComponent implements OnInit {
  unitArray: Unit[] = [];
  activeUnit?: Unit;
  @Input() set units(value: Unit[]) {
    this.unitArray = value;
    this.activeUnit = value[0];
  }
  constructor() {}

  ngOnInit(): void {
  }

  updateUnitState(unit: Unit): void {
    this.activeUnit = unit;
  }
}
