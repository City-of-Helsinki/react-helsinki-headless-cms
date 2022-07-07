import * as Apollo from '@apollo/client';

import useEventsApolloClientFromConfig from '../../core/configProvider/useEventsApolloClientFromConfig';

type UseQuery<Q, V> = (
  baseOptions?: Apollo.QueryHookOptions<Q, V>,
) => Apollo.QueryResult<Q, V>;

export default function makeQueryWithEventsApolloClientFromConfig<Q, V>(
  useQuery: UseQuery<Q, V>,
) {
  return (baseOptions: Apollo.QueryHookOptions<Q, V> = {}) => {
    const eventsApolloClientFromConfig = useEventsApolloClientFromConfig();

    return useQuery({
      client: eventsApolloClientFromConfig,
      ...baseOptions,
    });
  };
}
