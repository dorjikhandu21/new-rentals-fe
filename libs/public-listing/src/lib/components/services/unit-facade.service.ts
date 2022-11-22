import { Injectable } from '@angular/core';
import {BaseFacadeService, Unit} from "@new-rentals/shared";
import {UnitStateService} from "./unit-state.service";
import {UnitStateStore} from "../../models/unit.store";
import {UnitApiService} from "./unit-api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UnitFacadeService extends BaseFacadeService<UnitStateService, UnitStateStore>{

  constructor(private unitStateService: UnitStateService, private unitApiService: UnitApiService) {
    super(unitStateService);
  }

  getUnits(): Observable<Unit[]> {
    debugger
  return this.unitApiService.getUnits();
  }
}
