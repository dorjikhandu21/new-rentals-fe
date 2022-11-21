import { Injectable } from '@angular/core';
import {UpdateUserInput, UpdateUserPayload} from "@new-rentals/shared";
import {map, Observable} from 'rxjs';
import {Apollo, Mutation, } from "apollo-angular";
import {UPDATE_USER_MUTATION} from "../../../../../layout/src/lib/gql/mutations";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private apollo: Apollo) { }

  updateUser(input: UpdateUserInput): Observable<UpdateUserPayload> {
    return this.apollo.mutate<Mutation>({
      mutation: UPDATE_USER_MUTATION,
      variables: {input},
      fetchPolicy: "no-cache"
    }).pipe(map(response => {
      // @ts-ignore
      return response?.data?.['updateUser']
    }))
  }
}
