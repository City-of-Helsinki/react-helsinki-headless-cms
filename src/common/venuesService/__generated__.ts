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

export type AccessibilitySentences = {
  __typename?: 'AccessibilitySentences';
  groupName?: Maybe<Scalars['String']['output']>;
  sentences?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Ontology = {
  __typename?: 'Ontology';
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type OpeningHour = {
  __typename?: 'OpeningHour';
  date: Scalars['String']['output'];
  times: Array<Time>;
};

export type Point = {
  __typename?: 'Point';
  coordinates: Array<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  venue: Venue;
  venuesByIds: Array<Venue>;
};

export type QueryVenueArgs = {
  id: Scalars['ID']['input'];
};

export type QueryVenuesByIdsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  description: Scalars['String']['output'];
  endTime: Scalars['String']['output'];
  endTimeOnNextDay: Scalars['Boolean']['output'];
  fullDay: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  periods: Array<Scalars['Int']['output']>;
  resourceState: ResourceState;
  startTime: Scalars['String']['output'];
};

export type Venue = {
  __typename?: 'Venue';
  accessibilitySentences: Array<Maybe<AccessibilitySentences>>;
  addressLocality?: Maybe<Scalars['String']['output']>;
  addressPostalFull?: Maybe<Scalars['String']['output']>;
  connections: Array<Maybe<VenueConnection>>;
  dataSource?: Maybe<Scalars['String']['output']>;
  department?: Maybe<VenueDepartment>;
  departmentId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayedServiceOwner?: Maybe<Scalars['String']['output']>;
  displayedServiceOwnerType?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  infoUrl?: Maybe<Scalars['String']['output']>;
  isOpen?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ontologyTree: Array<Maybe<Ontology>>;
  ontologyWords: Array<Maybe<Ontology>>;
  openingHours?: Maybe<Array<OpeningHour>>;
  organization?: Maybe<VenueDepartment>;
  organizationId?: Maybe<Scalars['ID']['output']>;
  position?: Maybe<Point>;
  postalCode?: Maybe<Scalars['String']['output']>;
  providerType?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
};

export type VenueConnection = {
  __typename?: 'VenueConnection';
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  sectionType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type VenueDepartment = {
  __typename?: 'VenueDepartment';
  abbreviation?: Maybe<Scalars['String']['output']>;
  addressCity?: Maybe<Scalars['String']['output']>;
  addressPostalFull?: Maybe<Scalars['String']['output']>;
  addressZip?: Maybe<Scalars['String']['output']>;
  businessId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  hierarchyLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  municipalityCode?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  oid?: Maybe<Scalars['ID']['output']>;
  organizationId?: Maybe<Scalars['ID']['output']>;
  organizationType?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['ID']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  www?: Maybe<Scalars['String']['output']>;
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

export type ListVenueFragment = {
  __typename?: 'Venue';
  description?: string | null;
  id: string;
  image?: string | null;
  name?: string | null;
  streetAddress?: string | null;
  addressLocality?: string | null;
  providerType?: string | null;
  displayedServiceOwnerType?: string | null;
  ontologyWords: Array<{
    __typename?: 'Ontology';
    id?: number | null;
    label?: string | null;
  } | null>;
};

export type VenuesByIdsQueryVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
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
    providerType?: string | null;
    displayedServiceOwnerType?: string | null;
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
    providerType
    displayedServiceOwnerType
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
  > &
    (
      | { variables: VenuesByIdsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
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
export function useVenuesByIdsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        VenuesByIdsQuery,
        VenuesByIdsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<VenuesByIdsQuery, VenuesByIdsQueryVariables>(
    VenuesByIdsDocument,
    options,
  );
}
export type VenuesByIdsQueryHookResult = ReturnType<typeof useVenuesByIdsQuery>;
export type VenuesByIdsLazyQueryHookResult = ReturnType<
  typeof useVenuesByIdsLazyQuery
>;
export type VenuesByIdsSuspenseQueryHookResult = ReturnType<
  typeof useVenuesByIdsSuspenseQuery
>;
export type VenuesByIdsQueryResult = Apollo.QueryResult<
  VenuesByIdsQuery,
  VenuesByIdsQueryVariables
>;
