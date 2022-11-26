import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A valid URL, transported as a string */
  File: any;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
};

export type Amenity = {
  __typename?: 'Amenity';
  amenitableId: Scalars['ID'];
  amenitableType: Scalars['String'];
  atDetails?: Maybe<Scalars['String']>;
  atType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  satDetails?: Maybe<Scalars['String']>;
  satType?: Maybe<Scalars['String']>;
};

export type AmenityAttributes = {
  _destroy?: InputMaybe<Scalars['Int']>;
  amenitableId?: InputMaybe<Scalars['ID']>;
  amenitableType?: InputMaybe<Scalars['String']>;
  atDetails?: InputMaybe<Scalars['String']>;
  /** Amenities Types are usually vast, so making it enum does not makes sense  */
  atType?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** usually the numbers, ex: if sat_type is swimming pool, sat_details will be 2 */
  satDetails?: InputMaybe<Scalars['String']>;
  satType?: InputMaybe<SatTypeEnum>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Autogenerated input type of ApproveTenant */
export type ApproveTenantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of ApproveTenant. */
export type ApproveTenantPayload = {
  __typename?: 'ApproveTenantPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Attachment = {
  __typename?: 'Attachment';
  attachableId: Scalars['ID'];
  attachableType: Scalars['String'];
  category: Scalars['String'];
  fileContentType: Scalars['String'];
  fileName?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']>;
};

export type AttachmentAttributes = {
  _destroy?: InputMaybe<Scalars['Int']>;
  attachableId?: InputMaybe<Scalars['Int']>;
  attachableType?: InputMaybe<Scalars['String']>;
  category: CategoryEnum;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  file: Scalars['File'];
  fileFileName: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export enum CategoryEnum {
  Avatar = 'avatar',
  AvatarBackground = 'avatar_background',
  Logo = 'logo',
  MiscFiles = 'misc_files',
  Property = 'property',
  Unit = 'unit'
}

/** Autogenerated input type of CreateAttachment */
export type CreateAttachmentInput = {
  attributes: AttachmentAttributes;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of CreateAttachment. */
export type CreateAttachmentPayload = {
  __typename?: 'CreateAttachmentPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  fileObject?: Maybe<Attachment>;
};

/** Autogenerated input type of CreateProperty */
export type CreatePropertyInput = {
  attributes: PropertyAttributes;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of CreateProperty. */
export type CreatePropertyPayload = {
  __typename?: 'CreatePropertyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  property: Property;
};

/** Autogenerated input type of CreateTenant */
export type CreateTenantInput = {
  attributes: TenantAttributes;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of CreateTenant. */
export type CreateTenantPayload = {
  __typename?: 'CreateTenantPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  tenant?: Maybe<Tenant>;
};

/** Autogenerated input type of DeclineTenant */
export type DeclineTenantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of DeclineTenant. */
export type DeclineTenantPayload = {
  __typename?: 'DeclineTenantPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export enum GenderEnum {
  Female = 'female',
  Male = 'male',
  Unknown = 'unknown'
}

/** Autogenerated input type of InterviewTenant */
export type InterviewTenantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of InterviewTenant. */
export type InterviewTenantPayload = {
  __typename?: 'InterviewTenantPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptTenant?: Maybe<ApproveTenantPayload>;
  createAttachment?: Maybe<CreateAttachmentPayload>;
  createProperty?: Maybe<CreatePropertyPayload>;
  createTenant?: Maybe<CreateTenantPayload>;
  declineTenant?: Maybe<DeclineTenantPayload>;
  interviewTenant?: Maybe<InterviewTenantPayload>;
  updateProperty?: Maybe<UpdatePropertyPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationAcceptTenantArgs = {
  input: ApproveTenantInput;
};


export type MutationCreateAttachmentArgs = {
  input: CreateAttachmentInput;
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


export type MutationCreateTenantArgs = {
  input: CreateTenantInput;
};


export type MutationDeclineTenantArgs = {
  input: DeclineTenantInput;
};


export type MutationInterviewTenantArgs = {
  input: InterviewTenantInput;
};


export type MutationUpdatePropertyArgs = {
  input: UpdatePropertyInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export enum NameEnum {
  FreeTrial = 'free_trial',
  Golden = 'golden',
  Silver = 'silver'
}

export enum OccupancyTypeEnum {
  MultiFamilyHome = 'multi_family_home',
  SingleFamilyHome = 'single_family_home'
}

export type PortalSetting = {
  __typename?: 'PortalSetting';
  businessName: Scalars['String'];
  dzongkhag?: Maybe<Scalars['String']>;
  gewog?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  themeColour?: Maybe<Scalars['String']>;
};

export type PortalSettingAttributes = {
  _destroy?: InputMaybe<Scalars['Int']>;
  businessName?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  dzongkhag?: InputMaybe<Scalars['String']>;
  gewog?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
  themeColour?: InputMaybe<ThemeColourEnum>;
};

export type Profile = {
  __typename?: 'Profile';
  fullName: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
};

export type ProfileAttributes = {
  _destroy?: InputMaybe<Scalars['Int']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<GenderEnum>;
  id?: InputMaybe<Scalars['ID']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  salutation?: InputMaybe<SalutationEnum>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

export type Property = {
  __typename?: 'Property';
  attachments?: Maybe<Array<Attachment>>;
  id: Scalars['ID'];
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  neighbourhoodDetails?: Maybe<Scalars['String']>;
  normalAmenities?: Maybe<Array<Amenity>>;
  occupancyType?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  propertyDescription?: Maybe<Scalars['String']>;
  propertyName?: Maybe<Scalars['String']>;
  propertyType?: Maybe<Scalars['String']>;
  specialAmenities?: Maybe<Array<Amenity>>;
  units?: Maybe<Array<Unit>>;
  unitsCount?: Maybe<Scalars['Int']>;
};

export type PropertyAttributes = {
  _destroy?: InputMaybe<Scalars['Int']>;
  attachments?: InputMaybe<Array<AttachmentAttributes>>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lat?: InputMaybe<Scalars['String']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  lng?: InputMaybe<Scalars['String']>;
  neighbourhoodDetails?: InputMaybe<Scalars['String']>;
  normalAmenities?: InputMaybe<Array<AmenityAttributes>>;
  occupancyType?: InputMaybe<OccupancyTypeEnum>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  ownerId: Scalars['ID'];
  propertyDescription?: InputMaybe<Scalars['String']>;
  propertyName: Scalars['String'];
  propertyType?: InputMaybe<PropertyTypeEnum>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
  specialAmenities?: InputMaybe<Array<AmenityAttributes>>;
  units?: InputMaybe<Array<UnitAttributes>>;
};

export enum PropertyTypeEnum {
  ModernBuilding = 'modern_building',
  TraditionalHouse = 'traditional_house'
}

export type Query = {
  __typename?: 'Query';
  property: Property;
  unit: Unit;
  units: Array<Unit>;
  user: User;
  users: Array<User>;
};


export type QueryPropertyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUnitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUnitsArgs = {
  attributes?: InputMaybe<UnitFilterAttributes>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersArgs = {
  params?: InputMaybe<UserFilterAttributes>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  roleName: Scalars['String'];
};

export enum SalutationEnum {
  Mr = 'Mr',
  Mrs = 'Mrs'
}

export enum SatTypeEnum {
  Lift = 'lift',
  SwimmingPool = 'swimming_pool'
}

export enum StateEnum {
  Accepted = 'accepted',
  Declined = 'declined',
  Interviewing = 'interviewing',
  Received = 'received'
}

export enum StatusEnum {
  Active = 'active',
  Inactive = 'inactive'
}

export type SubscriptionPlan = {
  __typename?: 'SubscriptionPlan';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SubscriptionPlanAttributes = {
  _destroy?: InputMaybe<Scalars['Int']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<NameEnum>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  applicationDetail?: Maybe<Scalars['String']>;
  applicationTitle?: Maybe<Scalars['String']>;
  cid: Scalars['String'];
  currentEmployer?: Maybe<Scalars['String']>;
  familyComposition?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  movedInDate?: Maybe<Scalars['ISO8601Date']>;
  pets?: Maybe<Scalars['Boolean']>;
  preferMoveInDate?: Maybe<Scalars['ISO8601Date']>;
  property: Property;
  propertyId: Scalars['ID'];
  state: Scalars['String'];
  unit: Unit;
  unitId: Scalars['ID'];
  user: User;
  userId: Scalars['ID'];
};

export type TenantAttributes = {
  applicationDetail?: InputMaybe<Scalars['String']>;
  applicationTitle?: InputMaybe<Scalars['String']>;
  cid?: InputMaybe<Scalars['String']>;
  currentEmployer?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  familyComposition?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  movedInDate?: InputMaybe<Scalars['ISO8601Date']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  pets?: InputMaybe<Scalars['Boolean']>;
  preferMoveInDate?: InputMaybe<Scalars['ISO8601Date']>;
  propertyId?: InputMaybe<Scalars['ID']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
  /** Not Needed during first Creation Process */
  state?: InputMaybe<StateEnum>;
  unitId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export enum ThemeColourEnum {
  Green = 'green',
  Pink = 'pink',
  Red = 'red'
}

export type Unit = {
  __typename?: 'Unit';
  attachments: Array<Attachment>;
  id: Scalars['ID'];
  monthlyRent: Scalars['Int'];
  normalAmenities: Array<Amenity>;
  nosOfApplicants?: Maybe<Scalars['Int']>;
  nosOfBath?: Maybe<Scalars['Int']>;
  nosOfBed?: Maybe<Scalars['Int']>;
  occupied: Scalars['Boolean'];
  property: Property;
  propertyId: Scalars['ID'];
  unitDescription: Scalars['String'];
  unitNumber?: Maybe<Scalars['String']>;
};

export type UnitAttributes = {
  _destroy?: InputMaybe<Scalars['Int']>;
  attachments?: InputMaybe<Array<AttachmentAttributes>>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  monthlyRent?: InputMaybe<Scalars['Int']>;
  normalAmenities?: InputMaybe<Array<AmenityAttributes>>;
  nosOfBath?: InputMaybe<Scalars['Int']>;
  nosOfBed?: InputMaybe<Scalars['Int']>;
  occupied?: InputMaybe<Scalars['Boolean']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  propertyId?: InputMaybe<Scalars['ID']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
  unitDescription?: InputMaybe<Scalars['String']>;
  unitNumber?: InputMaybe<Scalars['String']>;
};

export type UnitFilterAttributes = {
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['String']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  lng?: InputMaybe<Scalars['String']>;
  occupancyType?: InputMaybe<OccupancyTypeEnum>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  propertyType?: InputMaybe<PropertyTypeEnum>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateProperty */
export type UpdatePropertyInput = {
  attributes: PropertyAttributes;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateProperty. */
export type UpdatePropertyPayload = {
  __typename?: 'UpdatePropertyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  property: Property;
};

/** Autogenerated input type of UpdateUser */
export type UpdateUserInput = {
  attributes: UserAttributes;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateUser. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  user: User;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  portalSetting?: Maybe<PortalSetting>;
  profile?: Maybe<Profile>;
  profileBackground?: Maybe<Attachment>;
  profilePic?: Maybe<Attachment>;
  role: Role;
  status?: Maybe<Scalars['String']>;
  subscriptionPlan?: Maybe<SubscriptionPlan>;
};

export type UserAttributes = {
  _destroy?: InputMaybe<Scalars['Int']>;
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  portalSetting?: InputMaybe<PortalSettingAttributes>;
  profile?: InputMaybe<ProfileAttributes>;
  roleId?: InputMaybe<Scalars['ID']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
  subscriptionPlan?: InputMaybe<SubscriptionPlanAttributes>;
};

export type UserFilterAttributes = {
  /** Default: asc, options: [:asc, :desc] */
  direction?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  limitPerPage?: InputMaybe<Scalars['Int']>;
  offsetPage?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<Scalars['ID']>;
  /** Note ~> Confirm with Backend For Correct Params */
  sort?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};
