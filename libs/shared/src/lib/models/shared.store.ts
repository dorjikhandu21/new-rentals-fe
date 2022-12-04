import {Tenant, Unit, User} from "./graphql";

export interface SharedStoreState {
  geoCodingFilters: any;
  unit: Unit;
  tenants: Tenant[];
  tenantsKanBan: Record<string, { cdkDropListData: string, cdkDropListConnectedTo: string[], data: Tenant[], apiCall: string }>
  showSearchBar: boolean;
  currentUserProfile: User
}

export enum SharedStoreStateEnum {
  GEO_CODING_FILTERS = 'geoCodingFilters',
  UNIT = 'unit',
  TENANTS = 'tenants',
  TENANTS_KANBAN = 'tenantsKanBan',
  SHOW_SEARCH_BAR = 'showSearchBar',
  CURRENT_USER_PROFILE = 'currentUserProfile'
}
