import { Injectable } from '@angular/core';
import {CredentialsService, Unit} from "@new-rentals/shared";
import {Apollo, Query} from "apollo-angular";
import {UNITS_LISTING_QUERY, UNITS_QUERY} from "../../gql/queries";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UnitApiService {

  constructor(private apollo: Apollo, private credentialsService: CredentialsService) { }

  getUnits(): Observable<Unit[]> {
    return this.apollo.query<Query>({
      query: this.credentialsService.isAuthenticated() ? UNITS_QUERY : UNITS_LISTING_QUERY,
      variables: {},
      fetchPolicy: "no-cache"
    }).pipe(map(response => {
      // @ts-ignore
      return response.data['units']
    }))
  }
}
