import { useConfig } from './useConfig';

export default function useQueryWithVenuesApolloClientFromConfig() {
  const { venuesApolloClient } = useConfig();

  if (!venuesApolloClient) {
    throw Error(
      'Error: useQueryWithVenuesApolloClientFromConfig - When using components from the apollo sub module, you must include a compatible Venues apollo client in the apolloClient field of the config object you provide with ConfigProvider',
    );
  }

  return venuesApolloClient;
}
