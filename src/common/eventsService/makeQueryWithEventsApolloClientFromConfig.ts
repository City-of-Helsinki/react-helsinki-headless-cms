import type * as Apollo from '@apollo/client';

import useEventsApolloClientFromConfig from '../../core/configProvider/useEventsApolloClientFromConfig';

type Modify<T, R> = Omit<T, keyof R> & R;

type UseQuery<Q, V> = (
  baseOptions?: Modify<
    Apollo.QueryHookOptions<Q, V>,
    {
      client?: Apollo.ApolloClient<Apollo.NormalizedCacheObject> | 'disabled';
    }
  >,
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
