import {gql} from "apollo-angular";
import {TypedDocumentNode} from "@apollo/client";

export const USERS_QUERY: TypedDocumentNode = gql`
  query users($params: UserFilterAttributes){
    users(params: $params){
      id
      role {
        id
        roleName
      }
      subscriptionPlan {
        id
        name
      }
      portalSetting {
        id
        themeColour
        gewog
        dzongkhag
        businessName
      }
      profile {
        id
        phone
        gender
        fullName
      }
      enabled
      email
      profilePic {
        id
        attachableId
        attachableType
        category
        fileName
        url
        userId
      }
      status
    }
  }
`

export const USER_QUERY: TypedDocumentNode = gql`
  query user ($id: ID) {
    user (id: $id) {
      email
      enabled
      id
      profile {
        fullName
        gender
        id
        phone
      }
      profilePic {
        attachableId
        attachableType
        category
        fileContentType
        fileName
        fileSize
        id
        url
        userId
      }
      role {
        id
        roleName
      }
      status
      subscriptionPlan {
        id
        name
      }
    }
  }
`
