import * as Apollo from '@apollo/client';

import useVenuesApolloClientFromConfig from '../../core/configProvider/useVenuesApolloClientFromConfig';

type UseQuery<Q, V> = (
  baseOptions?: Apollo.QueryHookOptions<Q, V>,
) => Apollo.QueryResult<Q, V>;

export default function makeQueryWithVenuesApolloClientFromConfig<Q, V>(
  useQuery: UseQuery<Q, V>,
) {
  return (baseOptions: Apollo.QueryHookOptions<Q, V> = {}) => {
    const eventsApolloClientFromConfig = useVenuesApolloClientFromConfig();

    return useQuery({
      client: eventsApolloClientFromConfig,
      ...baseOptions,
    });
  };
}
