import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import type { Config } from '../core/configProvider/configContext';

export const getApolloConfig = (
  uri: string,
): Pick<
  Config,
  'apolloClient' | 'eventsApolloClient' | 'venuesApolloClient'
> => {
  const apolloClient = new ApolloClient({
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  });
  return {
    apolloClient,
    eventsApolloClient: apolloClient,
    venuesApolloClient: apolloClient,
  };
};
