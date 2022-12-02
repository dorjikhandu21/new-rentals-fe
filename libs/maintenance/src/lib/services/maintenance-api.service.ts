import {Injectable} from '@angular/core';
import {Apollo, Mutation, Query} from "apollo-angular";
import {
  CreateMaintenancePayload,
  CURRENT_USER_QUERY,
  MaintenanceAttributes,
  NotificationService,
  User
} from "@new-rentals/shared";
import {map, Observable, tap} from "rxjs";
import {CREATE_MAINTENANCE} from "../gql/mutations";

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
}
