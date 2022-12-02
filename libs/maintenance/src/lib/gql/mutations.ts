import {TypedDocumentNode} from "@apollo/client";
import {gql} from "apollo-angular";

export const CREATE_MAINTENANCE: TypedDocumentNode = gql`
mutation createMaintenance($input: CreateMaintenanceInput!) {
  createMaintenance(input: $input){
    maintenance {
      id
    }
  }
}
`
/*Open to On-hold*/
export const ON_HOLD_MAINTENANCE: TypedDocumentNode = gql`
  mutation ($input: OnHoldMaintenanceInput!) {
    onHoldMaintenance(input: $input){
      status
    }
  }
`

/*On hold to in progress*/
export const CONFIRM_MAINTENANCE: TypedDocumentNode = gql`
  mutation ($input: ConfirmMaintenanceInput!) {
    confirmMaintenance(input: $input){
      status
    }
  }
`

/* open to in progress*/
export const WORK_MAINTENANCE: TypedDocumentNode = gql`
  mutation ($input: WorkMaintenanceInput!) {
    workMaintenance(input: $input){
      status
    }
  }
`

/*In progress to finish*/
export const FINISH_MAINTENANCE: TypedDocumentNode = gql`
  mutation ($input: FinishMaintenanceInput!) {
    finishMaintenance(input: $input){
      status
    }
  }
`


