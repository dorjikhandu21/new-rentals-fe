import { Injectable } from '@angular/core';
import {Apollo, Mutation, Query} from "apollo-angular";
import {map, Observable, tap} from "rxjs";
import {
  CreatePropertyPayload,
  NotificationService,
  PropertyAttributes, Unit, UnitFilterAttributes
} from "@new-rentals/shared";
import {CREATE_PROPERTY} from "../gql/mutations";
import {UNITS_QUERY} from "../../../../public-listing/src/lib/gql/queries";

@Injectable({
  providedIn: 'root'
})
export class PropertyApiService {

  constructor(private apollo: Apollo, private notificationService: NotificationService) { }

  createProperty(attributes: PropertyAttributes): Observable<CreatePropertyPayload> {
    return this.apollo.mutate<Mutation>({
      mutation: CREATE_PROPERTY,
      variables: {input: {attributes}},
      fetchPolicy: "no-cache"
    }).pipe(tap(() => this.notificationService.success('Property created successfully')),
      map((response) => {
      // @ts-ignore
      return response.data['createProperty']
    }))
  }

  getUnits(attributes: UnitFilterAttributes): Observable<Unit[]> {
    return this.apollo.query<Query>({
      query: UNITS_QUERY,
      variables: {attributes},
      fetchPolicy: "no-cache"
    }).pipe(map((response) => {
      debugger
        // @ts-ignore
        return response.data['units']
      }))
  }
}
