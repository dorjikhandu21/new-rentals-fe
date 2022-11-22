import { Injectable } from '@angular/core';
import {BaseFacadeService, Unit} from "@new-rentals/shared";
import {LayoutStateService} from "./layout-state.service";
import {LayoutStateStore} from "@new-rentals/layout";
import {LayoutApiService} from "./layout-api.service";

@Injectable({
  providedIn: 'root'
})
export class LayoutFacadeService extends BaseFacadeService<LayoutStateService, LayoutStateStore>{

  constructor(private layoutStateService: LayoutStateService, private layoutApiService: LayoutApiService) {
    super(layoutStateService);
  }
}
