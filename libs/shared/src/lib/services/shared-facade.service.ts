import { Injectable } from '@angular/core';
import {BaseFacadeService} from "./base-facade.service";
import {SharedStateService} from "./shared-state.service";
import {SharedStoreState} from "../models/shared.store";

@Injectable({
  providedIn: 'root'
})
export class SharedFacadeService extends BaseFacadeService<SharedStateService, SharedStoreState>{

  constructor(private sharedStateService: SharedStateService) {
    super(sharedStateService);
  }
}
