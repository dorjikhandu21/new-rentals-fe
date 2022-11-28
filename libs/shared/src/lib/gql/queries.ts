import {TypedDocumentNode} from "@apollo/client";
import {gql} from "apollo-angular";

export const UNIT_QUERY: TypedDocumentNode = gql`
  query unit ($id: ID) {
    unit (id: $id) {
      attachments {
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
      property {
        id
        lat
        lng
      }
      id
      monthlyRent
      normalAmenities {
        amenitableId
        amenitableType
        atDetails
        atType
        id
        satDetails
        satType
      }
      nosOfApplicants
      nosOfBath
      nosOfBed
      occupied
      propertyId
      unitDescription
      unitNumber
    }
  }
`

export const TENANTS_QUERY: TypedDocumentNode = gql`
  query tenants ($attributes: TenantFilterAttributes) {
    tenants(attributes: $attributes){
      id
      state
      user {
        id
        status
        profile {
          id
          fullName
          gender
          phone
        }
        profilePic {
          url
        }
      }
      property {
        propertyName
      }
      applicationTitle
      applicationDetail
      currentEmployer
      familyComposition
      pets
      preferMoveInDate
    }
  }
`
