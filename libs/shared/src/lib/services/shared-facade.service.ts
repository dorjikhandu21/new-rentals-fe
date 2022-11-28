import {Injectable} from '@angular/core';
import {BaseFacadeService} from "./base-facade.service";
import {SharedStateService} from "./shared-state.service";
import {SharedStoreState, SharedStoreStateEnum} from "../models/shared.store";
import {Observable, tap} from "rxjs";
import {
  ApproveTenantPayload,
  CreateTenantPayload, DeclineTenantPayload,
  InterviewTenantPayload, Tenant,
  TenantAttributes,
  Unit
} from "../models/graphql";
import {SharedApiService} from "./shared-api.service";
import {geocodeLatLng} from "../utilities/reverse.geocode";
import {SharedBlService} from "./shared-bl.service";

@Injectable({
  providedIn: 'root'
})
export class SharedFacadeService extends BaseFacadeService<SharedStateService, SharedStoreState> {

  constructor(private sharedStateService: SharedStateService, private sharedApiService: SharedApiService, private sharedBlService: SharedBlService) {
    super(sharedStateService);
  }

  getUnitDetails(id: string): Observable<Unit> {
    return this.sharedApiService.getUnitDetails(id).pipe(tap( (unit) => {
      // geocodeLatLng(unit);
      this.updateSpecificState(unit, SharedStoreStateEnum.UNIT);
    }));
  }

  getTenants(): Observable<Tenant[]> {
    return this.sharedApiService.getTenants().pipe(tap(tenants => {
      this.updateSpecificState(this.sharedBlService.getKanbanData(tenants), SharedStoreStateEnum.TENANTS_KANBAN)
      this.updateSpecificState(tenants, SharedStoreStateEnum.TENANTS);
    }));
  }

  createTenant(attributes: TenantAttributes): Observable<CreateTenantPayload> {
    return this.sharedApiService.createTenant(attributes);
  }

  interviewTenant(id: string): Observable<InterviewTenantPayload> {
    return this.sharedApiService.interviewTenant(id);
  }

  approveTenant(id: string): Observable<ApproveTenantPayload> {
    return this.sharedApiService.approveTenant(id);
  }

  declineTenant(id: string): Observable<DeclineTenantPayload> {
    return this.sharedApiService.declineTenant(id);
  }
}
