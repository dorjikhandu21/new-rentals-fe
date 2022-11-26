import { Injectable } from '@angular/core';
import {Apollo, Mutation, Query} from "apollo-angular";
import {map, Observable, tap} from "rxjs";
import {
  CreatePropertyPayload,
  NotificationService, Property,
  PropertyAttributes, Unit, UnitFilterAttributes
} from "@new-rentals/shared";
import {CREATE_PROPERTY} from "../gql/mutations";
import {PROPERTY_QUERY, UNITS_QUERY} from "@new-rentals/public-listing";

@Injectable({
  providedIn: 'root'
})
export class PropertyApiService {

  constructor(private apollo: Apollo, private notificationService: NotificationService) { }

  // ERROR Error: Uncaught (in promise): Error: To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options
  // Error: To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options

  createProperty(attributes: PropertyAttributes): Observable<CreatePropertyPayload> {
    debugger
    return this.apollo.mutate<Mutation>({
      mutation: CREATE_PROPERTY,
      variables: {input: {attributes}},
      context: {
        useMultipart: true
      },
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
        // @ts-ignore
        return response.data['units']
      }))
  }

  getProperty(id: string): Observable<Property> {
    return this.apollo.query<Query>({
      query: PROPERTY_QUERY,
      variables: {id},
      fetchPolicy: "no-cache"
    }).pipe(map(response => {
      // @ts-ignore
      return response.data['property']
    }))
  }
}
