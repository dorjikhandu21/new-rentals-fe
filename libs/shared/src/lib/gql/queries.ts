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
