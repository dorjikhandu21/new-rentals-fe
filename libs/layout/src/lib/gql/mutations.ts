import {gql} from "apollo-angular";
import {TypedDocumentNode} from "@apollo/client";

export const UPDATE_USER_MUTATION: TypedDocumentNode = gql`
mutation updateUserMutation($input: UpdateUserInput!){
  updateUser(input: $input) {
    clientMutationId
    user {
      email
      enabled
      id
      profile {
        id
        fullName
        gender
        phone
      }
      role {
        id
        roleName
      }
      portalSetting {
        id
        businessName
        dzongkhag
        gewog
        themeColour
      }
      subscriptionPlan {
        id
        name
      }
    }
  }
}
`
