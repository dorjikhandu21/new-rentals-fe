import { Injectable } from '@angular/core';
import {Apollo, Mutation} from "apollo-angular";
import {map, Observable, tap} from "rxjs";
import {
  CreatePropertyPayload,
  NotificationService,
  PropertyAttributes
} from "@new-rentals/shared";
import {CREATE_PROPERTY} from "../gql/mutations";

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
}
