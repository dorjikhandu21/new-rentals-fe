import {Injectable, Query} from '@angular/core';
import {Observable} from "rxjs";
import {Unit} from "../models/graphql";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {UNIT_QUERY} from "../gql/queries";

@Injectable({
  providedIn: 'root'
})
export class SharedApiService {

  constructor(private apollo: Apollo) { }

  getUnitDetails(id: string): Observable<Unit> {
    return this.apollo.query<Query>({
      query: UNIT_QUERY,
      variables: {id},
      fetchPolicy: 'no-cache'
    }).pipe(map(response => {
     // @ts-ignore
      return response.data['unit']
    }))
  }
}
