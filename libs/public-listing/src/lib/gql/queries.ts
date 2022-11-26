import {TypedDocumentNode} from "@apollo/client";
import {gql} from "apollo-angular";

export const UNITS_QUERY: TypedDocumentNode = gql`
  query units ($attributes: UnitFilterAttributes) {
    units (attributes: $attributes) {
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
        unitsCount
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
          propertyId
          unitDescription
          unitNumber
        }
      }
      propertyId
      unitDescription
      unitNumber
    }
  }
`

export const PROPERTY_QUERY: TypedDocumentNode = gql`
  query property ($id: ID) {
    property (id: $id) {
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
        propertyId
        unitDescription
        unitNumber
        property {
          lat
          lng
        }
      }
      unitsCount
    }
  }
`
