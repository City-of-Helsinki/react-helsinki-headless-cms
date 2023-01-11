/* eslint-disable no-use-before-define */
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
};

export type AccessibilitySentences = {
  __typename?: 'AccessibilitySentences';
  groupName?: Maybe<Scalars['String']>;
  sentences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Connection = {
  __typename?: 'Connection';
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  sectionType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  endTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images: Array<Image>;
  infoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  offers: Array<Offer>;
  shortDescription?: Maybe<Scalars['String']>;
  startTime: Scalars['String'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String'];
  node: Event;
};

export type EventQuery = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  language?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
  superEventType?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['String']>;
};

export type EventsConnection = {
  __typename?: 'EventsConnection';
  edges: Array<EventEdge>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Image = {
  __typename?: 'Image';
  alt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  url: Scalars['String'];
};

export type Offer = {
  __typename?: 'Offer';
  description?: Maybe<Scalars['String']>;
  infoUrl?: Maybe<Scalars['String']>;
  isFree: Scalars['Boolean'];
  price?: Maybe<Scalars['String']>;
};

export type Ontology = {
  __typename?: 'Ontology';
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
};

export type OpeningHour = {
  __typename?: 'OpeningHour';
  date: Scalars['String'];
  times: Array<Time>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  count: Scalars['Int'];
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Point = {
  __typename?: 'Point';
  coordinates: Array<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  events: EventsConnection;
  venue: Venue;
  venuesByIds: Array<Venue>;
};

export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventQuery>;
};

export type QueryVenueArgs = {
  id: Scalars['ID'];
};

export type QueryVenuesByIdsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ResourceState {
  Closed = 'closed',
  EnterOnly = 'enter_only',
  ExitOnly = 'exit_only',
  Open = 'open',
  OpenAndReservable = 'open_and_reservable',
  SelfService = 'self_service',
  Undefined = 'undefined',
  WeatherPermitting = 'weather_permitting',
  WithKey = 'with_key',
  WithKeyAndReservation = 'with_key_and_reservation',
  WithReservation = 'with_reservation',
}

export type Time = {
  __typename?: 'Time';
  description: Scalars['String'];
  endTime: Scalars['String'];
  endTimeOnNextDay: Scalars['Boolean'];
  fullDay: Scalars['Boolean'];
  name: Scalars['String'];
  periods: Array<Scalars['Int']>;
  resourceState: ResourceState;
  startTime: Scalars['String'];
};

export type Venue = {
  __typename?: 'Venue';
  accessibilitySentences: Array<Maybe<AccessibilitySentences>>;
  addressLocality?: Maybe<Scalars['String']>;
  connections: Array<Maybe<Connection>>;
  dataSource?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  infoUrl?: Maybe<Scalars['String']>;
  /**
   *  This field is currently disabled because the Hauki integration is not enabled
   * @deprecated Hauki integration is currently disabled so this field can not be accessed
   */
  isOpen?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  ontologyTree: Array<Maybe<Ontology>>;
  ontologyWords: Array<Maybe<Ontology>>;
  /**
   *  This field is currently disabled because the Hauki integration is not enabled
   * @deprecated Hauki integration is currently disabled so this field can not be accessed
   */
  openingHours?: Maybe<Array<OpeningHour>>;
  position?: Maybe<Point>;
  postalCode?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
};

export type ListVenueFragment = {
  __typename?: 'Venue';
  description?: string | null;
  id: string;
  image?: string | null;
  name?: string | null;
  streetAddress?: string | null;
  addressLocality?: string | null;
  ontologyWords: Array<{
    __typename?: 'Ontology';
    id?: number | null;
    label?: string | null;
  } | null>;
};

export type VenuesByIdsQueryVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;

export type VenuesByIdsQuery = {
  __typename?: 'Query';
  venuesByIds: Array<{
    __typename?: 'Venue';
    description?: string | null;
    id: string;
    image?: string | null;
    name?: string | null;
    streetAddress?: string | null;
    addressLocality?: string | null;
    ontologyWords: Array<{
      __typename?: 'Ontology';
      id?: number | null;
      label?: string | null;
    } | null>;
  }>;
};

export const ListVenueFragmentDoc = gql`
  fragment listVenue on Venue {
    description
    id
    image
    name
    streetAddress
    addressLocality
    ontologyWords {
      id
      label
    }
  }
`;
export const VenuesByIdsDocument = gql`
  query VenuesByIds($ids: [ID!]!) {
    venuesByIds(ids: $ids) {
      ...listVenue
    }
  }
  ${ListVenueFragmentDoc}
`;

/**
 * __useVenuesByIdsQuery__
 *
 * To run a query within a React component, call `useVenuesByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVenuesByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVenuesByIdsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useVenuesByIdsQuery(
  baseOptions: Apollo.QueryHookOptions<
    VenuesByIdsQuery,
    VenuesByIdsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VenuesByIdsQuery, VenuesByIdsQueryVariables>(
    VenuesByIdsDocument,
    options,
  );
}
export function useVenuesByIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VenuesByIdsQuery,
    VenuesByIdsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VenuesByIdsQuery, VenuesByIdsQueryVariables>(
    VenuesByIdsDocument,
    options,
  );
}
export type VenuesByIdsQueryHookResult = ReturnType<typeof useVenuesByIdsQuery>;
export type VenuesByIdsLazyQueryHookResult = ReturnType<
  typeof useVenuesByIdsLazyQuery
>;
export type VenuesByIdsQueryResult = Apollo.QueryResult<
  VenuesByIdsQuery,
  VenuesByIdsQueryVariables
>;
