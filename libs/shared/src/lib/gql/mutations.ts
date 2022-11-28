import {TypedDocumentNode} from "@apollo/client";
import {gql} from "apollo-angular";

export const CREATE_TENANT: TypedDocumentNode = gql`
  mutation createTenant ($input: CreateTenantInput!) {
    createTenant (input: $input) {
      clientMutationId
      tenant {
        applicationDetail
        applicationTitle
        cid
        currentEmployer
        familyComposition
        id
        movedInDate
        pets
        preferMoveInDate
        propertyId
        state
        unitId
        userId
      }
    }
  }
`

export const APPROVE_TENANT: TypedDocumentNode = gql`
  mutation approveTenant ($input: ApproveTenantInput!) {
     acceptTenant(input: $input){
       status
     }
  }
`

export const INTERVIEW_TENANT: TypedDocumentNode = gql`
  mutation interviewTenant ($input: InterviewTenantInput!) {
    interviewTenant(input: $input){
      status
    }
  }
`

export const DECLINE_TENANT: TypedDocumentNode = gql`
  mutation declineTenant ($input: DeclineTenantInput!) {
    declineTenant(input: $input){
      status
    }
  }
`
