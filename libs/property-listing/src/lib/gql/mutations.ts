import {TypedDocumentNode} from "@apollo/client";
import {gql} from "apollo-angular";

export const CREATE_PROPERTY: TypedDocumentNode = gql`
  mutation createProperty ($input: CreatePropertyInput!) {
    createProperty (input: $input) {
      clientMutationId
      property {
        attachments {
          attachableId
          attachableType
          category
          fileContentType
          fileName
          fileSize
          id
          url
          user {
            email
            enabled
            id
            portalSetting {
              businessName
              dzongkhag
              gewog
              id
              themeColour
            }
            profile {
              fullName
              gender
              id
              phone
            }
            profileBackground {
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
          userId
        }
        id
        lat
        lng
        neighbourhoodDetails
        normalAmenities {
          amenitableId
          amenitableType
          atDetails
          atType
          id
          satDetails
          satType
        }
        occupancyType
        owner {
          email
          enabled
          id
          portalSetting {
            businessName
            dzongkhag
            gewog
            id
            themeColour
          }
          profile {
            fullName
            gender
            id
            phone
          }
          profileBackground {
            attachableId
            attachableType
            category
            fileContentType
            fileName
            fileSize
            id
            url
            user {
              email
              enabled
              id
              status
            }
            userId
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
            user {
              email
              enabled
              id
              status
            }
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
        propertyDescription
        propertyName
        propertyType
        specialAmenities {
          amenitableId
          amenitableType
          atDetails
          atType
          id
          satDetails
          satType
        }
        units {
          attachments {
            attachableId
            attachableType
            category
            fileContentType
            fileName
            fileSize
            id
            url
            user {
              email
              enabled
              id
              status
            }
            userId
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
          nosOfBath
          nosOfBed
          occupied
          property {
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
            id
            lat
            lng
            neighbourhoodDetails
            normalAmenities {
              amenitableId
              amenitableType
              atDetails
              atType
              id
              satDetails
              satType
            }
            occupancyType
            owner {
              email
              enabled
              id
              status
            }
            propertyDescription
            propertyName
            propertyType
            specialAmenities {
              amenitableId
              amenitableType
              atDetails
              atType
              id
              satDetails
              satType
            }
          }
          propertyId
          unitDescription
          unitNumber
        }
      }
    }
  }
`
