import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
  federation__FieldSet: any;
  link__Import: any;
};

export type Audience = {
  __typename?: 'Audience';
  id?: Maybe<Scalars['ID']>;
  internalContext?: Maybe<Scalars['String']>;
  internalId?: Maybe<Scalars['String']>;
  internalType?: Maybe<Scalars['String']>;
  name?: Maybe<LocalizedObject>;
};

export type BannerPage = {
  __typename?: 'BannerPage';
  buttonText?: Maybe<LocalizedObject>;
  buttonUrl?: Maybe<LocalizedObject>;
  description?: Maybe<LocalizedObject>;
  heroBackgroundImage?: Maybe<LocalizedCmsImage>;
  heroBackgroundImageColor?: Maybe<LocalizedObject>;
  heroBackgroundImageMobile?: Maybe<LocalizedCmsImage>;
  heroTopLayerImage?: Maybe<LocalizedCmsImage>;
  keywords?: Maybe<LocalizedCmsKeywords>;
  socialMediaImage?: Maybe<LocalizedCmsImage>;
  title?: Maybe<LocalizedObject>;
  titleAndDescriptionColor?: Maybe<LocalizedObject>;
};

export type CmsImage = {
  __typename?: 'CmsImage';
  photographerCredit?: Maybe<LocalizedObject>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Division = {
  __typename?: 'Division';
  municipality?: Maybe<Scalars['String']>;
  name?: Maybe<LocalizedObject>;
  ocdId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type EventDetails = {
  __typename?: 'EventDetails';
  audience: Array<Audience>;
  audienceMaxAge?: Maybe<Scalars['String']>;
  audienceMinAge?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['String']>;
  description?: Maybe<LocalizedObject>;
  endTime?: Maybe<Scalars['String']>;
  enrolmentEndTime?: Maybe<Scalars['String']>;
  enrolmentStartTime?: Maybe<Scalars['String']>;
  eventStatus?: Maybe<Scalars['String']>;
  externalLinks: Array<ExternalLink>;
  id: Scalars['ID'];
  images: Array<EventImage>;
  inLanguage: Array<InLanguage>;
  infoUrl?: Maybe<LocalizedObject>;
  internalContext?: Maybe<Scalars['String']>;
  internalId?: Maybe<Scalars['String']>;
  internalType?: Maybe<Scalars['String']>;
  keywords: Array<Keyword>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  location?: Maybe<Place>;
  locationExtraInfo?: Maybe<LocalizedObject>;
  maximumAttendeeCapacity?: Maybe<Scalars['Int']>;
  minimumAttendeeCapacity?: Maybe<Scalars['Int']>;
  name: LocalizedObject;
  offers: Array<Offer>;
  provider?: Maybe<LocalizedObject>;
  providerContactInfo?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['ID']>;
  remainingAttendeeCapacity?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<LocalizedObject>;
  startTime?: Maybe<Scalars['String']>;
  subEvents: Array<InternalIdObject>;
  superEvent?: Maybe<InternalIdObject>;
  superEventType?: Maybe<Scalars['String']>;
  typeId?: Maybe<EventTypeId>;
};

export type EventImage = {
  __typename?: 'EventImage';
  createdTime?: Maybe<Scalars['String']>;
  cropping?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalContext?: Maybe<Scalars['String']>;
  internalId: Scalars['String'];
  internalType?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  photographerName?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type EventListResponse = {
  __typename?: 'EventListResponse';
  data: Array<EventDetails>;
  meta: Meta;
};

export enum EventTypeId {
  Course = 'Course',
  General = 'General',
}

export type ExternalLink = {
  __typename?: 'ExternalLink';
  language?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type InLanguage = {
  __typename?: 'InLanguage';
  id?: Maybe<Scalars['ID']>;
  internalContext?: Maybe<Scalars['String']>;
  internalId?: Maybe<Scalars['String']>;
  internalType?: Maybe<Scalars['String']>;
  name?: Maybe<LocalizedObject>;
  translationAvailable?: Maybe<Scalars['Boolean']>;
};

export type InternalIdObject = {
  __typename?: 'InternalIdObject';
  internalId?: Maybe<Scalars['String']>;
};

export type Keyword = {
  __typename?: 'Keyword';
  aggregate?: Maybe<Scalars['Boolean']>;
  altLabels?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<EventImage>;
  internalContext?: Maybe<Scalars['String']>;
  internalId: Scalars['String'];
  internalType?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  nEvents?: Maybe<Scalars['Int']>;
  name?: Maybe<LocalizedObject>;
  publisher?: Maybe<Scalars['ID']>;
};

export type KeywordListResponse = {
  __typename?: 'KeywordListResponse';
  data: Array<Keyword>;
  meta: Meta;
};

export type LocalizedCmsImage = {
  __typename?: 'LocalizedCmsImage';
  en?: Maybe<CmsImage>;
  fi?: Maybe<CmsImage>;
  sv?: Maybe<CmsImage>;
};

export type LocalizedCmsKeywords = {
  __typename?: 'LocalizedCmsKeywords';
  en?: Maybe<Array<Maybe<Scalars['String']>>>;
  fi?: Maybe<Array<Maybe<Scalars['String']>>>;
  sv?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LocalizedObject = {
  __typename?: 'LocalizedObject';
  en?: Maybe<Scalars['String']>;
  fi?: Maybe<Scalars['String']>;
  sv?: Maybe<Scalars['String']>;
};

export type Meta = {
  __typename?: 'Meta';
  count: Scalars['Int'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
};

export type Neighborhood = {
  __typename?: 'Neighborhood';
  id: Scalars['ID'];
  name: LocalizedObject;
};

export type NeighborhoodListResponse = {
  __typename?: 'NeighborhoodListResponse';
  data: Array<Neighborhood>;
  meta: Meta;
};

export type Offer = {
  __typename?: 'Offer';
  description?: Maybe<LocalizedObject>;
  infoUrl?: Maybe<LocalizedObject>;
  isFree?: Maybe<Scalars['Boolean']>;
  price?: Maybe<LocalizedObject>;
};

export type OrganizationDetails = {
  __typename?: 'OrganizationDetails';
  affiliatedOrganizations?: Maybe<Array<Maybe<Scalars['String']>>>;
  classification?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  dissolutionDate?: Maybe<Scalars['String']>;
  foundingDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalContext?: Maybe<Scalars['String']>;
  internalId: Scalars['String'];
  internalType?: Maybe<Scalars['String']>;
  isAffiliated: Scalars['Boolean'];
  lastModifiedTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentOrganization?: Maybe<Scalars['String']>;
  replacedBy?: Maybe<Scalars['String']>;
  subOrganizations?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Place = {
  __typename?: 'Place';
  addressCountry?: Maybe<Scalars['String']>;
  addressLocality?: Maybe<LocalizedObject>;
  addressRegion?: Maybe<Scalars['String']>;
  contactType?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['String']>;
  dataSource?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  divisions?: Maybe<Array<Division>>;
  email?: Maybe<Scalars['String']>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<EventImage>;
  infoUrl?: Maybe<LocalizedObject>;
  internalContext?: Maybe<Scalars['String']>;
  internalId: Scalars['String'];
  internalType?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  nEvents?: Maybe<Scalars['Int']>;
  name?: Maybe<LocalizedObject>;
  parent?: Maybe<Scalars['ID']>;
  position?: Maybe<PlacePosition>;
  postOfficeBoxNum?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['ID']>;
  replacedBy?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<LocalizedObject>;
  telephone?: Maybe<LocalizedObject>;
};

export type PlaceListResponse = {
  __typename?: 'PlaceListResponse';
  data: Array<Place>;
  meta: Meta;
};

export type PlacePosition = {
  __typename?: 'PlacePosition';
  coordinates: Array<Scalars['Float']>;
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  _service: _Service;
  eventDetails: EventDetails;
  eventList: EventListResponse;
  eventsByIds: EventListResponse;
  keywordDetails: Keyword;
  keywordList: KeywordListResponse;
  neighborhoodList: NeighborhoodListResponse;
  organizationDetails: OrganizationDetails;
  placeDetails: Place;
  placeList: PlaceListResponse;
};

export type QueryEventDetailsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryEventListArgs = {
  allOngoing?: InputMaybe<Scalars['Boolean']>;
  allOngoingAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allOngoingOr?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  audienceMaxAgeGt?: InputMaybe<Scalars['String']>;
  audienceMaxAgeLt?: InputMaybe<Scalars['String']>;
  audienceMinAgeGt?: InputMaybe<Scalars['String']>;
  audienceMinAgeLt?: InputMaybe<Scalars['String']>;
  combinedText?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  division?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  end?: InputMaybe<Scalars['String']>;
  endsAfter?: InputMaybe<Scalars['String']>;
  endsBefore?: InputMaybe<Scalars['String']>;
  eventType?: InputMaybe<Array<InputMaybe<EventTypeId>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inLanguage?: InputMaybe<Scalars['String']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internetBased?: InputMaybe<Scalars['Boolean']>;
  internetOngoingAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internetOngoingOr?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  keyword?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywordAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywordNot?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywordOrSet1?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywordOrSet2?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywordOrSet3?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Scalars['String']>;
  localOngoingAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  localOngoingOr?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  localOngoingOrSet1?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  localOngoingOrSet2?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  localOngoingOrSet3?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  publisher?: InputMaybe<Scalars['ID']>;
  publisherAncestor?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
  startsAfter?: InputMaybe<Scalars['String']>;
  startsBefore?: InputMaybe<Scalars['String']>;
  suitableFor?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  superEvent?: InputMaybe<Scalars['ID']>;
  superEventType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['String']>;
};

export type QueryEventsByIdsArgs = {
  end?: InputMaybe<Scalars['String']>;
  eventType?: InputMaybe<Array<InputMaybe<EventTypeId>>>;
  ids: Array<Scalars['ID']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
};

export type QueryKeywordDetailsArgs = {
  id: Scalars['ID'];
};

export type QueryKeywordListArgs = {
  dataSource?: InputMaybe<Scalars['String']>;
  hasUpcomingEvents?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  showAllKeywords?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type QueryOrganizationDetailsArgs = {
  id: Scalars['ID'];
};

export type QueryPlaceDetailsArgs = {
  id: Scalars['ID'];
};

export type QueryPlaceListArgs = {
  dataSource?: InputMaybe<Scalars['String']>;
  divisions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasUpcomingEvents?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  showAllPlaces?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type StaticPage = {
  __typename?: 'StaticPage';
  contentSection?: Maybe<LocalizedObject>;
  contentYype?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['Int']>;
  draftTitle?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['String']>;
  goLiveAt?: Maybe<Scalars['String']>;
  hasUnpublishedChanges?: Maybe<Scalars['Boolean']>;
  headingSection?: Maybe<LocalizedObject>;
  id: Scalars['ID'];
  keywords?: Maybe<LocalizedCmsKeywords>;
  lastPublishedAt?: Maybe<Scalars['String']>;
  latestRevisionCreatedAt?: Maybe<Scalars['String']>;
  live?: Maybe<Scalars['Boolean']>;
  liveRevision?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  lockedAt?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  numchild?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  searchDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  urlPath?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY',
}

export type LocalizedCmsEventFieldsFragment = {
  __typename?: 'LocalizedObject';
  en?: string | null;
  fi?: string | null;
  sv?: string | null;
};

export type PlaceCmsEventFieldsFragment = {
  __typename?: 'Place';
  id?: string | null;
  hasUpcomingEvents?: boolean | null;
  internalId: string;
  email?: string | null;
  postalCode?: string | null;
  divisions?: Array<{
    __typename?: 'Division';
    type: string;
    name?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
  }> | null;
  infoUrl?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
  name?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
  addressLocality?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
  streetAddress?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
  position?: {
    __typename?: 'PlacePosition';
    coordinates: Array<number>;
  } | null;
  telephone?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
};

export type KeywordCmsEventFieldsFragment = {
  __typename?: 'Keyword';
  id?: string | null;
  internalId: string;
  dataSource?: string | null;
  hasUpcomingEvents?: boolean | null;
  name?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
};

export type OfferCmsEventFieldsFragment = {
  __typename?: 'Offer';
  isFree?: boolean | null;
  price?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
  description?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
  infoUrl?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
};

export type EventCmsEventFieldsFragment = {
  __typename?: 'EventDetails';
  id: string;
  internalId?: string | null;
  audienceMinAge?: string | null;
  audienceMaxAge?: string | null;
  eventStatus?: string | null;
  typeId?: EventTypeId | null;
  endTime?: string | null;
  startTime?: string | null;
  publisher?: string | null;
  enrolmentStartTime?: string | null;
  enrolmentEndTime?: string | null;
  remainingAttendeeCapacity?: number | null;
  externalLinks: Array<{
    __typename?: 'ExternalLink';
    name?: string | null;
    link?: string | null;
  }>;
  images: Array<{
    __typename?: 'EventImage';
    id?: string | null;
    name: string;
    url: string;
    photographerName?: string | null;
  }>;
  subEvents: Array<{
    __typename?: 'InternalIdObject';
    internalId?: string | null;
  }>;
  superEvent?: {
    __typename?: 'InternalIdObject';
    internalId?: string | null;
  } | null;
  inLanguage: Array<{
    __typename?: 'InLanguage';
    name?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
  }>;
  keywords: Array<{
    __typename?: 'Keyword';
    id?: string | null;
    internalId: string;
    dataSource?: string | null;
    hasUpcomingEvents?: boolean | null;
    name?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
  }>;
  location?: {
    __typename?: 'Place';
    id?: string | null;
    hasUpcomingEvents?: boolean | null;
    internalId: string;
    email?: string | null;
    postalCode?: string | null;
    divisions?: Array<{
      __typename?: 'Division';
      type: string;
      name?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
    }> | null;
    infoUrl?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
    name?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
    addressLocality?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
    streetAddress?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
    position?: {
      __typename?: 'PlacePosition';
      coordinates: Array<number>;
    } | null;
    telephone?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
  } | null;
  offers: Array<{
    __typename?: 'Offer';
    isFree?: boolean | null;
    price?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
    description?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
    infoUrl?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
  }>;
  name: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  };
  description?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
  shortDescription?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
  provider?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
  infoUrl?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
  audience: Array<{
    __typename?: 'Audience';
    id?: string | null;
    name?: {
      __typename?: 'LocalizedObject';
      en?: string | null;
      fi?: string | null;
      sv?: string | null;
    } | null;
  }>;
  locationExtraInfo?: {
    __typename?: 'LocalizedObject';
    en?: string | null;
    fi?: string | null;
    sv?: string | null;
  } | null;
};

export type EventListQueryVariables = Exact<{
  eventType?: InputMaybe<
    Array<InputMaybe<EventTypeId>> | InputMaybe<EventTypeId>
  >;
  internetBased?: InputMaybe<Scalars['Boolean']>;
  suitableFor?: InputMaybe<
    Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>
  >;
  allOngoing?: InputMaybe<Scalars['Boolean']>;
  allOngoingAnd?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  division?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  end?: InputMaybe<Scalars['String']>;
  endsAfter?: InputMaybe<Scalars['String']>;
  endsBefore?: InputMaybe<Scalars['String']>;
  inLanguage?: InputMaybe<Scalars['String']>;
  include?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  isFree?: InputMaybe<Scalars['Boolean']>;
  keyword?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  keywordAnd?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  keywordOrSet1?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  keywordOrSet2?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  keywordOrSet3?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  keywordNot?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  language?: InputMaybe<Scalars['String']>;
  localOngoingAnd?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  location?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  publisher?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
  startsAfter?: InputMaybe<Scalars['String']>;
  startsBefore?: InputMaybe<Scalars['String']>;
  superEvent?: InputMaybe<Scalars['ID']>;
  superEventType?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  text?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['String']>;
}>;

export type EventListQuery = {
  __typename?: 'Query';
  eventList: {
    __typename?: 'EventListResponse';
    meta: {
      __typename?: 'Meta';
      count: number;
      next?: string | null;
      previous?: string | null;
    };
    data: Array<{
      __typename?: 'EventDetails';
      id: string;
      internalId?: string | null;
      audienceMinAge?: string | null;
      audienceMaxAge?: string | null;
      eventStatus?: string | null;
      typeId?: EventTypeId | null;
      endTime?: string | null;
      startTime?: string | null;
      publisher?: string | null;
      enrolmentStartTime?: string | null;
      enrolmentEndTime?: string | null;
      remainingAttendeeCapacity?: number | null;
      externalLinks: Array<{
        __typename?: 'ExternalLink';
        name?: string | null;
        link?: string | null;
      }>;
      images: Array<{
        __typename?: 'EventImage';
        id?: string | null;
        name: string;
        url: string;
        photographerName?: string | null;
      }>;
      subEvents: Array<{
        __typename?: 'InternalIdObject';
        internalId?: string | null;
      }>;
      superEvent?: {
        __typename?: 'InternalIdObject';
        internalId?: string | null;
      } | null;
      inLanguage: Array<{
        __typename?: 'InLanguage';
        name?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
      }>;
      keywords: Array<{
        __typename?: 'Keyword';
        id?: string | null;
        internalId: string;
        dataSource?: string | null;
        hasUpcomingEvents?: boolean | null;
        name?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
      }>;
      location?: {
        __typename?: 'Place';
        id?: string | null;
        hasUpcomingEvents?: boolean | null;
        internalId: string;
        email?: string | null;
        postalCode?: string | null;
        divisions?: Array<{
          __typename?: 'Division';
          type: string;
          name?: {
            __typename?: 'LocalizedObject';
            en?: string | null;
            fi?: string | null;
            sv?: string | null;
          } | null;
        }> | null;
        infoUrl?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        name?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        addressLocality?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        streetAddress?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        position?: {
          __typename?: 'PlacePosition';
          coordinates: Array<number>;
        } | null;
        telephone?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
      } | null;
      offers: Array<{
        __typename?: 'Offer';
        isFree?: boolean | null;
        price?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        description?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        infoUrl?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
      }>;
      name: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      };
      description?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
      shortDescription?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
      provider?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
      infoUrl?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
      audience: Array<{
        __typename?: 'Audience';
        id?: string | null;
        name?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
      }>;
      locationExtraInfo?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
    }>;
  };
};

export type EventsByIdsQueryVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
  eventType?: InputMaybe<
    Array<InputMaybe<EventTypeId>> | InputMaybe<EventTypeId>
  >;
  include?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
  sort?: InputMaybe<Scalars['String']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['String']>;
}>;

export type EventsByIdsQuery = {
  __typename?: 'Query';
  eventsByIds: {
    __typename?: 'EventListResponse';
    data: Array<{
      __typename?: 'EventDetails';
      id: string;
      internalId?: string | null;
      audienceMinAge?: string | null;
      audienceMaxAge?: string | null;
      eventStatus?: string | null;
      typeId?: EventTypeId | null;
      endTime?: string | null;
      startTime?: string | null;
      publisher?: string | null;
      enrolmentStartTime?: string | null;
      enrolmentEndTime?: string | null;
      remainingAttendeeCapacity?: number | null;
      externalLinks: Array<{
        __typename?: 'ExternalLink';
        name?: string | null;
        link?: string | null;
      }>;
      images: Array<{
        __typename?: 'EventImage';
        id?: string | null;
        name: string;
        url: string;
        photographerName?: string | null;
      }>;
      subEvents: Array<{
        __typename?: 'InternalIdObject';
        internalId?: string | null;
      }>;
      superEvent?: {
        __typename?: 'InternalIdObject';
        internalId?: string | null;
      } | null;
      inLanguage: Array<{
        __typename?: 'InLanguage';
        name?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
      }>;
      keywords: Array<{
        __typename?: 'Keyword';
        id?: string | null;
        internalId: string;
        dataSource?: string | null;
        hasUpcomingEvents?: boolean | null;
        name?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
      }>;
      location?: {
        __typename?: 'Place';
        id?: string | null;
        hasUpcomingEvents?: boolean | null;
        internalId: string;
        email?: string | null;
        postalCode?: string | null;
        divisions?: Array<{
          __typename?: 'Division';
          type: string;
          name?: {
            __typename?: 'LocalizedObject';
            en?: string | null;
            fi?: string | null;
            sv?: string | null;
          } | null;
        }> | null;
        infoUrl?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        name?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        addressLocality?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        streetAddress?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        position?: {
          __typename?: 'PlacePosition';
          coordinates: Array<number>;
        } | null;
        telephone?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
      } | null;
      offers: Array<{
        __typename?: 'Offer';
        isFree?: boolean | null;
        price?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        description?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
        infoUrl?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
      }>;
      name: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      };
      description?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
      shortDescription?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
      provider?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
      infoUrl?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
      audience: Array<{
        __typename?: 'Audience';
        id?: string | null;
        name?: {
          __typename?: 'LocalizedObject';
          en?: string | null;
          fi?: string | null;
          sv?: string | null;
        } | null;
      }>;
      locationExtraInfo?: {
        __typename?: 'LocalizedObject';
        en?: string | null;
        fi?: string | null;
        sv?: string | null;
      } | null;
    }>;
    meta: {
      __typename?: 'Meta';
      count: number;
      next?: string | null;
      previous?: string | null;
    };
  };
};

export const LocalizedCmsEventFieldsFragmentDoc = gql`
  fragment localizedCmsEventFields on LocalizedObject {
    en
    fi
    sv
  }
`;
export const KeywordCmsEventFieldsFragmentDoc = gql`
  fragment keywordCmsEventFields on Keyword {
    id
    internalId
    dataSource
    hasUpcomingEvents
    name {
      ...localizedCmsEventFields
    }
  }
  ${LocalizedCmsEventFieldsFragmentDoc}
`;
export const PlaceCmsEventFieldsFragmentDoc = gql`
  fragment placeCmsEventFields on Place {
    id
    divisions {
      type
      name {
        ...localizedCmsEventFields
      }
    }
    hasUpcomingEvents
    internalId
    email
    infoUrl {
      ...localizedCmsEventFields
    }
    name {
      ...localizedCmsEventFields
    }
    addressLocality {
      ...localizedCmsEventFields
    }
    streetAddress {
      ...localizedCmsEventFields
    }
    postalCode
    position {
      coordinates
    }
    telephone {
      ...localizedCmsEventFields
    }
  }
  ${LocalizedCmsEventFieldsFragmentDoc}
`;
export const OfferCmsEventFieldsFragmentDoc = gql`
  fragment offerCmsEventFields on Offer {
    isFree
    price {
      ...localizedCmsEventFields
    }
    description {
      ...localizedCmsEventFields
    }
    infoUrl {
      ...localizedCmsEventFields
    }
  }
  ${LocalizedCmsEventFieldsFragmentDoc}
`;
export const EventCmsEventFieldsFragmentDoc = gql`
  fragment eventCmsEventFields on EventDetails {
    id
    internalId
    audienceMinAge
    audienceMaxAge
    eventStatus
    externalLinks {
      name
      link
    }
    images {
      id
      name
      url
      photographerName
    }
    subEvents {
      internalId
    }
    typeId
    superEvent {
      internalId
    }
    inLanguage {
      name {
        ...localizedCmsEventFields
      }
    }
    keywords {
      ...keywordCmsEventFields
    }
    location {
      ...placeCmsEventFields
    }
    offers {
      ...offerCmsEventFields
    }
    name {
      ...localizedCmsEventFields
    }
    description {
      ...localizedCmsEventFields
    }
    shortDescription {
      ...localizedCmsEventFields
    }
    endTime
    startTime
    publisher
    provider {
      ...localizedCmsEventFields
    }
    infoUrl {
      ...localizedCmsEventFields
    }
    audience {
      id
      name {
        ...localizedCmsEventFields
      }
    }
    locationExtraInfo {
      ...localizedCmsEventFields
    }
    enrolmentStartTime
    enrolmentEndTime
    remainingAttendeeCapacity
  }
  ${LocalizedCmsEventFieldsFragmentDoc}
  ${KeywordCmsEventFieldsFragmentDoc}
  ${PlaceCmsEventFieldsFragmentDoc}
  ${OfferCmsEventFieldsFragmentDoc}
`;
export const EventListDocument = gql`
  query EventList(
    $eventType: [EventTypeId]
    $internetBased: Boolean
    $suitableFor: [Int]
    $allOngoing: Boolean
    $allOngoingAnd: [String]
    $division: [String]
    $end: String
    $endsAfter: String
    $endsBefore: String
    $inLanguage: String
    $include: [String]
    $isFree: Boolean
    $keyword: [String]
    $keywordAnd: [String]
    $keywordOrSet1: [String]
    $keywordOrSet2: [String]
    $keywordOrSet3: [String]
    $keywordNot: [String]
    $language: String
    $localOngoingAnd: [String]
    $location: [String]
    $page: Int
    $pageSize: Int
    $publisher: ID
    $sort: String
    $start: String
    $startsAfter: String
    $startsBefore: String
    $superEvent: ID
    $superEventType: [String]
    $text: String
    $translation: String
  ) {
    eventList(
      eventType: $eventType
      internetBased: $internetBased
      suitableFor: $suitableFor
      allOngoing: $allOngoing
      allOngoingAnd: $allOngoingAnd
      division: $division
      end: $end
      endsAfter: $endsAfter
      endsBefore: $endsBefore
      include: $include
      inLanguage: $inLanguage
      isFree: $isFree
      keyword: $keyword
      keywordAnd: $keywordAnd
      keywordOrSet1: $keywordOrSet1
      keywordOrSet2: $keywordOrSet2
      keywordOrSet3: $keywordOrSet3
      keywordNot: $keywordNot
      language: $language
      localOngoingAnd: $localOngoingAnd
      location: $location
      page: $page
      pageSize: $pageSize
      publisher: $publisher
      sort: $sort
      start: $start
      startsAfter: $startsAfter
      startsBefore: $startsBefore
      superEvent: $superEvent
      superEventType: $superEventType
      text: $text
      translation: $translation
    ) {
      meta {
        count
        next
        previous
      }
      data {
        ...eventCmsEventFields
      }
    }
  }
  ${EventCmsEventFieldsFragmentDoc}
`;

/**
 * __useEventListQuery__
 *
 * To run a query within a React component, call `useEventListQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventListQuery({
 *   variables: {
 *      eventType: // value for 'eventType'
 *      internetBased: // value for 'internetBased'
 *      suitableFor: // value for 'suitableFor'
 *      allOngoing: // value for 'allOngoing'
 *      allOngoingAnd: // value for 'allOngoingAnd'
 *      division: // value for 'division'
 *      end: // value for 'end'
 *      endsAfter: // value for 'endsAfter'
 *      endsBefore: // value for 'endsBefore'
 *      inLanguage: // value for 'inLanguage'
 *      include: // value for 'include'
 *      isFree: // value for 'isFree'
 *      keyword: // value for 'keyword'
 *      keywordAnd: // value for 'keywordAnd'
 *      keywordOrSet1: // value for 'keywordOrSet1'
 *      keywordOrSet2: // value for 'keywordOrSet2'
 *      keywordOrSet3: // value for 'keywordOrSet3'
 *      keywordNot: // value for 'keywordNot'
 *      language: // value for 'language'
 *      localOngoingAnd: // value for 'localOngoingAnd'
 *      location: // value for 'location'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      publisher: // value for 'publisher'
 *      sort: // value for 'sort'
 *      start: // value for 'start'
 *      startsAfter: // value for 'startsAfter'
 *      startsBefore: // value for 'startsBefore'
 *      superEvent: // value for 'superEvent'
 *      superEventType: // value for 'superEventType'
 *      text: // value for 'text'
 *      translation: // value for 'translation'
 *   },
 * });
 */
export function useEventListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    EventListQuery,
    EventListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<EventListQuery, EventListQueryVariables>(
    EventListDocument,
    options,
  );
}
export function useEventListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EventListQuery,
    EventListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<EventListQuery, EventListQueryVariables>(
    EventListDocument,
    options,
  );
}
export type EventListQueryHookResult = ReturnType<typeof useEventListQuery>;
export type EventListLazyQueryHookResult = ReturnType<
  typeof useEventListLazyQuery
>;
export type EventListQueryResult = Apollo.QueryResult<
  EventListQuery,
  EventListQueryVariables
>;
export const EventsByIdsDocument = gql`
  query EventsByIds(
    $ids: [ID!]!
    $eventType: [EventTypeId]
    $include: [String]
    $sort: String
    $pageSize: Int
    $page: Int
    $start: String
    $end: String
  ) {
    eventsByIds(
      ids: $ids
      eventType: $eventType
      include: $include
      sort: $sort
      pageSize: $pageSize
      page: $page
      start: $start
      end: $end
    ) {
      data {
        ...eventCmsEventFields
      }
      meta {
        count
        next
        previous
      }
    }
  }
  ${EventCmsEventFieldsFragmentDoc}
`;

/**
 * __useEventsByIdsQuery__
 *
 * To run a query within a React component, call `useEventsByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsByIdsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *      eventType: // value for 'eventType'
 *      include: // value for 'include'
 *      sort: // value for 'sort'
 *      pageSize: // value for 'pageSize'
 *      page: // value for 'page'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useEventsByIdsQuery(
  baseOptions: Apollo.QueryHookOptions<
    EventsByIdsQuery,
    EventsByIdsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<EventsByIdsQuery, EventsByIdsQueryVariables>(
    EventsByIdsDocument,
    options,
  );
}
export function useEventsByIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EventsByIdsQuery,
    EventsByIdsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<EventsByIdsQuery, EventsByIdsQueryVariables>(
    EventsByIdsDocument,
    options,
  );
}
export type EventsByIdsQueryHookResult = ReturnType<typeof useEventsByIdsQuery>;
export type EventsByIdsLazyQueryHookResult = ReturnType<
  typeof useEventsByIdsLazyQuery
>;
export type EventsByIdsQueryResult = Apollo.QueryResult<
  EventsByIdsQuery,
  EventsByIdsQueryVariables
>;
