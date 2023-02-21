import { ApolloClient, InMemoryCache } from '@apollo/client';

import { EVENTS_PROXY_ENDPOINT, LINKED_EVENTS_ENDPOINT } from '../constants';
import { Config } from '../core/configProvider/configContext';
import { CmsEndpoint } from './constants';

export const useCmsEndpointConfig = (
  cms: keyof typeof CmsEndpoint,
): Partial<Config> => {
  const apolloClient = new ApolloClient({
    uri: CmsEndpoint[cms],
    cache: new InMemoryCache(),
  });
  const eventsApolloClient = new ApolloClient({
    uri: EVENTS_PROXY_ENDPOINT,
    cache: new InMemoryCache(),
  });
  const internalHrefOrigins = [
    new URL(CmsEndpoint[cms]).origin,
    new URL(LINKED_EVENTS_ENDPOINT).href.replace('/event/', ''),
  ];

  return { apolloClient, eventsApolloClient, internalHrefOrigins };
};
