import { Injectable } from '@angular/core';
import {Apollo, Mutation} from "apollo-angular";
import {map, Observable} from "rxjs";
import {CreatePropertyInput, CreatePropertyPayload, Property, PropertyAttributes} from "@new-rentals/shared";
import {CREATE_PROPERTY} from "../gql/mutations";

@Injectable({
  providedIn: 'root'
})
export class PropertyApiService {

  constructor(private apollo: Apollo) { }

  createProperty(attributes: PropertyAttributes): Observable<CreatePropertyPayload> {
    return this.apollo.mutate<Mutation>({
      mutation: CREATE_PROPERTY,
      variables: {input: {attributes}},
      fetchPolicy: "no-cache"
    }).pipe(map((response) => {
      // @ts-ignore
      return response.data['createProperty']
    }))
  }
}
