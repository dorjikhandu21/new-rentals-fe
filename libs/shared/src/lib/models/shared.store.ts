import {Tenant, Unit} from "./graphql";

export interface SharedStoreState {
  geoCodingFilters: any;
  unit: Unit;
  tenants: Tenant[];
  tenantsKanBan: Record<string, { cdkDropListData: string, cdkDropListConnectedTo: string[], data: Tenant[], apiCall: string }>
}

export enum SharedStoreStateEnum {
  GEO_CODING_FILTERS = 'geoCodingFilters',
  UNIT = 'unit',
  TENANTS = 'tenants',
  TENANTS_KANBAN = 'tenantsKanBan'
}
