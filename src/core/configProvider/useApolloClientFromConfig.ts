import { useConfig } from './useConfig';

export default function useQueryWithApolloClientFromConfig() {
  const { apolloClient } = useConfig();

  if (!apolloClient) {
    throw Error(
      'When using components from the apollo sub module, you must include a compatible apollo client in the apolloClient field of the config object you provide with ConfigProvider',
    );
  }

  return apolloClient;
}
