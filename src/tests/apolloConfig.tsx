import { ApolloClient, InMemoryCache } from '@apollo/client';

import type { Config } from '../core/configProvider/configContext';

export const getApolloConfig = (
  uri: string,
): Pick<
  Config,
  'apolloClient' | 'eventsApolloClient' | 'venuesApolloClient'
> => {
  const apolloClient = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
  return {
    apolloClient,
    eventsApolloClient: apolloClient,
    venuesApolloClient: apolloClient,
  };
};
