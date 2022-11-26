import { Injectable } from '@angular/core';
import {Unit} from "@new-rentals/shared";
import {Apollo, Query} from "apollo-angular";
import {UNITS_QUERY} from "../../gql/queries";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UnitApiService {

  constructor(private apollo: Apollo) { }

  getUnits(): Observable<Unit[]> {
    return this.apollo.query<Query>({
      query: UNITS_QUERY,
      variables: {},
      fetchPolicy: "no-cache"
    }).pipe(map(response => {
      // @ts-ignore
      return response.data['units']
    }))
  }
}
