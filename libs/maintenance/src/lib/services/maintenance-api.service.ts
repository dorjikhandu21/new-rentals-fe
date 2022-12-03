import {Injectable} from '@angular/core';
import {Apollo, Mutation, Query} from "apollo-angular";
import {
  ConfirmMaintenancePayload,
  CreateMaintenancePayload,
  CURRENT_USER_QUERY, FinishMaintenancePayload, Maintenance,
  MaintenanceAttributes,
  NotificationService, OnHoldMaintenancePayload,
  User, WorkMaintenancePayload
} from "@new-rentals/shared";
import {map, Observable, tap} from "rxjs";
import {
  CONFIRM_MAINTENANCE,
  CREATE_MAINTENANCE,
  FINISH_MAINTENANCE,
  ON_HOLD_MAINTENANCE,
  WORK_MAINTENANCE
} from "../gql/mutations";
import {MAINTENANCES_QUERY} from "../gql/queries";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceApiService {

  constructor(private apollo: Apollo, private notificationService: NotificationService) {
  }

  createMaintenance(attributes: MaintenanceAttributes): Observable<CreateMaintenancePayload> {
    return this.apollo.mutate<Mutation>({
      mutation: CREATE_MAINTENANCE,
      variables: {input: {attributes}},
      fetchPolicy: "no-cache"
    }).pipe(tap(() => this.notificationService.success('Maintenance ticket created successfully')), map(response => {
      // @ts-ignore
      return response.data['maintenance']
    }))
  }

  getCurrentUserDetails(id: string): Observable<User> {
    return this.apollo.query<Query>({
      query: CURRENT_USER_QUERY,
      variables: {id},
      fetchPolicy: "no-cache"
    }).pipe(map((response) => {
      // @ts-ignore
      return response.data['user']
    }));
  }

  getMaintenances(): Observable<Maintenance[]> {
    return this.apollo.query<Query>({
      query: MAINTENANCES_QUERY,
      variables: {},
      fetchPolicy: "no-cache"
    }).pipe(map((response) => {
      // @ts-ignore
      return response.data['maintenances'];
    }))
  }

  confirmMaintenance(id: number):Observable<ConfirmMaintenancePayload> {
    return this.apollo.mutate<Mutation>({
      mutation: CONFIRM_MAINTENANCE,
      variables: {input: {id}},
      fetchPolicy: "no-cache"
    }).pipe(map((response) => {
      // @ts-ignore
      return response.data['createMaintenance']
    } ))
  }

  onHoldMaintenance(id: number):Observable<OnHoldMaintenancePayload> {
    return this.apollo.mutate<Mutation>({
      mutation: ON_HOLD_MAINTENANCE,
      variables: {input: {id}},
      fetchPolicy: "no-cache"
    }).pipe(map((response) => {
      // @ts-ignore
      return response.data['onHoldMaintenance']
    } ))
  }

  workMaintenance(id: number):Observable<WorkMaintenancePayload> {
    return this.apollo.mutate<Mutation>({
      mutation: WORK_MAINTENANCE,
      variables: {input: {id}},
      fetchPolicy: "no-cache"
    }).pipe(map((response) => {
      // @ts-ignore
      return response.data['workMaintenance']
    } ))
  }

  finishMaintenance(id: number):Observable<FinishMaintenancePayload> {
    return this.apollo.mutate<Mutation>({
      mutation: FINISH_MAINTENANCE,
      variables: {input: {id}},
      fetchPolicy: "no-cache"
    }).pipe(map((response) => {
      // @ts-ignore
      return response.data['finishMaintenance']
    } ))
  }
}
