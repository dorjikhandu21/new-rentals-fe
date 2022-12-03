import {TypedDocumentNode} from "@apollo/client";
import {gql} from "apollo-angular";

export const MAINTENANCES_QUERY: TypedDocumentNode = gql`
  query maintenances ($attributes: MaintenanceFilterAttributes) {
    maintenances (attributes: $attributes) {
      descriptions
      id
      priority
      propertyId
      requestDate
      requestTitle
      requestType
      state
      tenantId
      property {
        id
        propertyName
      }
      tenant {
        user {
          profile {
            fullName
          }
        }
      }
    }
  }
`
