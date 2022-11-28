import {Injectable} from '@angular/core';
import {BaseFacadeService} from "./base-facade.service";
import {SharedStateService} from "./shared-state.service";
import {SharedStoreState, SharedStoreStateEnum} from "../models/shared.store";
import {Observable, tap} from "rxjs";
import {Unit} from "../models/graphql";
import {SharedApiService} from "./shared-api.service";
import {geocodeLatLng} from "../utilities/reverse.geocode";

@Injectable({
  providedIn: 'root'
})
export class SharedFacadeService extends BaseFacadeService<SharedStateService, SharedStoreState> {

  constructor(private sharedStateService: SharedStateService, private sharedApiService: SharedApiService) {
    super(sharedStateService);
  }

  getUnitDetails(id: string): Observable<Unit> {
    return this.sharedApiService.getUnitDetails(id).pipe(tap( (unit) => {
      geocodeLatLng(unit);
      this.updateSpecificState(unit, SharedStoreStateEnum.UNIT);
    }));
  }
}
