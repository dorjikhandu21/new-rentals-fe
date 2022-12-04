import {Injectable, Query} from '@angular/core';
import {Observable} from "rxjs";
import {
  ApproveTenantPayload,
  CreateTenantPayload, DeclineTenantPayload,
  InterviewTenantPayload, Tenant,
  TenantAttributes,
  Unit, User
} from "../models/graphql";
import {Apollo, Mutation} from "apollo-angular";
import {map} from "rxjs/operators";
import {CURRENT_USER_QUERY, TENANTS_QUERY, UNIT_QUERY} from "../gql/queries";
import {APPROVE_TENANT, CREATE_TENANT, DECLINE_TENANT, INTERVIEW_TENANT} from "../gql/mutations";

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

  getTenants(): Observable<Tenant[]> {
    return this.apollo.query<Query>({
      query: TENANTS_QUERY,
      variables: {},
      fetchPolicy: 'no-cache'
    }).pipe(map(response => {
      // @ts-ignore
      return response.data['tenants']
    }))
  }

  createTenant(attributes: TenantAttributes): Observable<CreateTenantPayload> {
    return this.apollo.mutate<Mutation>({
      mutation: CREATE_TENANT,
      variables: {input: {attributes}},
      fetchPolicy: "no-cache"
    }).pipe(map(response => {
      // @ts-ignore
      return response.data['tenant']
    }))
  }

  interviewTenant(id: string): Observable<InterviewTenantPayload> {
    return this.apollo.mutate<Mutation>({
      mutation: INTERVIEW_TENANT,
      variables: {input: {id}},
      fetchPolicy: "no-cache"
    }).pipe(map(response => {
      // @ts-ignore
      return response.data['tenant']
    }))
  }

  approveTenant(id: string): Observable<ApproveTenantPayload> {
    return this.apollo.mutate<Mutation>({
      mutation: APPROVE_TENANT,
      variables: {input: {id}},
      fetchPolicy: "no-cache"
    }).pipe(map(response => {
      // @ts-ignore
      return response.data['tenant']
    }))
  }

  declineTenant(id: string): Observable<DeclineTenantPayload> {
    return this.apollo.mutate<Mutation>({
      mutation: DECLINE_TENANT,
      variables: {input: {id}},
      fetchPolicy: "no-cache"
    }).pipe(map(response => {
      // @ts-ignore
      return response.data['tenant']
    }))
  }

getCurrentUserProfile(id: string): Observable<User> {
    return this.apollo.query<Query>({
      query: CURRENT_USER_QUERY,
      variables: {id},
      fetchPolicy: "no-cache"
    }).pipe(map(response => {
      // @ts-ignore
      return response.data?.['user']
    }))
  }
}
