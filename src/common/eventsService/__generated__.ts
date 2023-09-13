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
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  _Any: { input: any; output: any };
  federation__FieldSet: { input: any; output: any };
  link__Import: { input: any; output: any };
};

export type Audience = {
  __typename?: 'Audience';
  id?: Maybe<Scalars['ID']['output']>;
  internalContext?: Maybe<Scalars['String']['output']>;
  internalId?: Maybe<Scalars['String']['output']>;
  internalType?: Maybe<Scalars['String']['output']>;
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
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Division = {
  __typename?: 'Division';
  municipality?: Maybe<Scalars['String']['output']>;
  name?: Maybe<LocalizedObject>;
  ocdId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type EventDetails = {
  __typename?: 'EventDetails';
  audience: Array<Audience>;
  audienceMaxAge?: Maybe<Scalars['String']['output']>;
  audienceMinAge?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['String']['output']>;
  customData?: Maybe<Scalars['String']['output']>;
  dataSource?: Maybe<Scalars['String']['output']>;
  datePublished?: Maybe<Scalars['String']['output']>;
  description?: Maybe<LocalizedObject>;
  endTime?: Maybe<Scalars['String']['output']>;
  enrolmentEndTime?: Maybe<Scalars['String']['output']>;
  enrolmentStartTime?: Maybe<Scalars['String']['output']>;
  eventStatus?: Maybe<Scalars['String']['output']>;
  externalLinks: Array<ExternalLink>;
  id: Scalars['ID']['output'];
  images: Array<EventImage>;
  inLanguage: Array<InLanguage>;
  infoUrl?: Maybe<LocalizedObject>;
  internalContext?: Maybe<Scalars['String']['output']>;
  internalId?: Maybe<Scalars['String']['output']>;
  internalType?: Maybe<Scalars['String']['output']>;
  keywords: Array<Keyword>;
  lastModifiedTime?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Place>;
  locationExtraInfo?: Maybe<LocalizedObject>;
  maximumAttendeeCapacity?: Maybe<Scalars['Int']['output']>;
  minimumAttendeeCapacity?: Maybe<Scalars['Int']['output']>;
  name: LocalizedObject;
  offers: Array<Offer>;
  provider?: Maybe<LocalizedObject>;
  providerContactInfo?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['ID']['output']>;
  remainingAttendeeCapacity?: Maybe<Scalars['Int']['output']>;
  shortDescription?: Maybe<LocalizedObject>;
  startTime?: Maybe<Scalars['String']['output']>;
  subEvents: Array<InternalIdObject>;
  superEvent?: Maybe<InternalIdObject>;
  superEventType?: Maybe<Scalars['String']['output']>;
  typeId?: Maybe<EventTypeId>;
};

export type EventImage = {
  __typename?: 'EventImage';
  createdTime?: Maybe<Scalars['String']['output']>;
  cropping?: Maybe<Scalars['String']['output']>;
  dataSource?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  internalContext?: Maybe<Scalars['String']['output']>;
  internalId: Scalars['String']['output'];
  internalType?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['String']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  photographerName?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
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
  language?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type InLanguage = {
  __typename?: 'InLanguage';
  id?: Maybe<Scalars['ID']['output']>;
  internalContext?: Maybe<Scalars['String']['output']>;
  internalId?: Maybe<Scalars['String']['output']>;
  internalType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<LocalizedObject>;
  translationAvailable?: Maybe<Scalars['Boolean']['output']>;
};

export type InternalIdObject = {
  __typename?: 'InternalIdObject';
  internalId?: Maybe<Scalars['String']['output']>;
};

export type Keyword = {
  __typename?: 'Keyword';
  aggregate?: Maybe<Scalars['Boolean']['output']>;
  altLabels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createdTime?: Maybe<Scalars['String']['output']>;
  dataSource?: Maybe<Scalars['String']['output']>;
  deprecated?: Maybe<Scalars['Boolean']['output']>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<EventImage>;
  internalContext?: Maybe<Scalars['String']['output']>;
  internalId: Scalars['String']['output'];
  internalType?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['String']['output']>;
  nEvents?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<LocalizedObject>;
  publisher?: Maybe<Scalars['ID']['output']>;
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
  en?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fi?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sv?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type LocalizedObject = {
  __typename?: 'LocalizedObject';
  en?: Maybe<Scalars['String']['output']>;
  fi?: Maybe<Scalars['String']['output']>;
  sv?: Maybe<Scalars['String']['output']>;
};

export type Meta = {
  __typename?: 'Meta';
  count: Scalars['Int']['output'];
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
};

export type Neighborhood = {
  __typename?: 'Neighborhood';
  id: Scalars['ID']['output'];
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
  isFree?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<LocalizedObject>;
};

export type OrganizationDetails = {
  __typename?: 'OrganizationDetails';
  affiliatedOrganizations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  classification?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['String']['output']>;
  dataSource?: Maybe<Scalars['String']['output']>;
  dissolutionDate?: Maybe<Scalars['String']['output']>;
  foundingDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  internalContext?: Maybe<Scalars['String']['output']>;
  internalId: Scalars['String']['output'];
  internalType?: Maybe<Scalars['String']['output']>;
  isAffiliated: Scalars['Boolean']['output'];
  lastModifiedTime?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentOrganization?: Maybe<Scalars['String']['output']>;
  replacedBy?: Maybe<Scalars['String']['output']>;
  subOrganizations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Place = {
  __typename?: 'Place';
  addressCountry?: Maybe<Scalars['String']['output']>;
  addressLocality?: Maybe<LocalizedObject>;
  addressRegion?: Maybe<Scalars['String']['output']>;
  contactType?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['String']['output']>;
  customData?: Maybe<Scalars['String']['output']>;
  dataSource?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  divisions?: Maybe<Array<Division>>;
  email?: Maybe<Scalars['String']['output']>;
  hasUpcomingEvents?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<EventImage>;
  infoUrl?: Maybe<LocalizedObject>;
  internalContext?: Maybe<Scalars['String']['output']>;
  internalId: Scalars['String']['output'];
  internalType?: Maybe<Scalars['String']['output']>;
  lastModifiedTime?: Maybe<Scalars['String']['output']>;
  nEvents?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<LocalizedObject>;
  parent?: Maybe<Scalars['ID']['output']>;
  position?: Maybe<PlacePosition>;
  postOfficeBoxNum?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['ID']['output']>;
  replacedBy?: Maybe<Scalars['String']['output']>;
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
  coordinates: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryEventListArgs = {
  allOngoing?: InputMaybe<Scalars['Boolean']['input']>;
  allOngoingAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allOngoingOr?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  audienceMaxAgeGt?: InputMaybe<Scalars['String']['input']>;
  audienceMaxAgeLt?: InputMaybe<Scalars['String']['input']>;
  audienceMinAgeGt?: InputMaybe<Scalars['String']['input']>;
  audienceMinAgeLt?: InputMaybe<Scalars['String']['input']>;
  combinedText?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  division?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  end?: InputMaybe<Scalars['String']['input']>;
  endsAfter?: InputMaybe<Scalars['String']['input']>;
  endsBefore?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<Array<InputMaybe<EventTypeId>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  inLanguage?: InputMaybe<Scalars['String']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internetBased?: InputMaybe<Scalars['Boolean']['input']>;
  internetOngoingAnd?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  internetOngoingOr?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywordAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywordNot?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywordOrSet1?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywordOrSet2?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywordOrSet3?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  localOngoingAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  localOngoingOr?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  localOngoingOrSet1?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  localOngoingOrSet2?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  localOngoingOrSet3?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  location?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  publisher?: InputMaybe<Scalars['ID']['input']>;
  publisherAncestor?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  startsAfter?: InputMaybe<Scalars['String']['input']>;
  startsBefore?: InputMaybe<Scalars['String']['input']>;
  suitableFor?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  superEvent?: InputMaybe<Scalars['ID']['input']>;
  superEventType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text?: InputMaybe<Scalars['String']['input']>;
  translation?: InputMaybe<Scalars['String']['input']>;
};

export type QueryEventsByIdsArgs = {
  end?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<Array<InputMaybe<EventTypeId>>>;
  ids: Array<Scalars['ID']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
};

export type QueryKeywordDetailsArgs = {
  id: Scalars['ID']['input'];
};

export type QueryKeywordListArgs = {
  dataSource?: InputMaybe<Scalars['String']['input']>;
  hasUpcomingEvents?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  showAllKeywords?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type QueryOrganizationDetailsArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPlaceDetailsArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPlaceListArgs = {
  dataSource?: InputMaybe<Scalars['String']['input']>;
  divisions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hasUpcomingEvents?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  showAllPlaces?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type StaticPage = {
  __typename?: 'StaticPage';
  contentSection?: Maybe<LocalizedObject>;
  contentYype?: Maybe<Scalars['Int']['output']>;
  depth?: Maybe<Scalars['Int']['output']>;
  draftTitle?: Maybe<Scalars['String']['output']>;
  expireAt?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['Boolean']['output']>;
  firstPublishedAt?: Maybe<Scalars['String']['output']>;
  goLiveAt?: Maybe<Scalars['String']['output']>;
  hasUnpublishedChanges?: Maybe<Scalars['Boolean']['output']>;
  headingSection?: Maybe<LocalizedObject>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<LocalizedCmsKeywords>;
  lastPublishedAt?: Maybe<Scalars['String']['output']>;
  latestRevisionCreatedAt?: Maybe<Scalars['String']['output']>;
  live?: Maybe<Scalars['Boolean']['output']>;
  liveRevision?: Maybe<Scalars['Int']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  lockedAt?: Maybe<Scalars['String']['output']>;
  lockedBy?: Maybe<Scalars['String']['output']>;
  numchild?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  showInMenus?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  urlPath?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']['output']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
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
  internetBased?: InputMaybe<Scalars['Boolean']['input']>;
  suitableFor?: InputMaybe<
    | Array<InputMaybe<Scalars['Int']['input']>>
    | InputMaybe<Scalars['Int']['input']>
  >;
  allOngoing?: InputMaybe<Scalars['Boolean']['input']>;
  allOngoingAnd?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  division?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  end?: InputMaybe<Scalars['String']['input']>;
  endsAfter?: InputMaybe<Scalars['String']['input']>;
  endsBefore?: InputMaybe<Scalars['String']['input']>;
  inLanguage?: InputMaybe<Scalars['String']['input']>;
  include?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  keywordAnd?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  keywordOrSet1?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  keywordOrSet2?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  keywordOrSet3?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  keywordNot?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  language?: InputMaybe<Scalars['String']['input']>;
  localOngoingAnd?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  location?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  publisher?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  startsAfter?: InputMaybe<Scalars['String']['input']>;
  startsBefore?: InputMaybe<Scalars['String']['input']>;
  superEvent?: InputMaybe<Scalars['ID']['input']>;
  superEventType?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  text?: InputMaybe<Scalars['String']['input']>;
  translation?: InputMaybe<Scalars['String']['input']>;
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
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  eventType?: InputMaybe<
    Array<InputMaybe<EventTypeId>> | InputMaybe<EventTypeId>
  >;
  include?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  sort?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['String']['input']>;
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
