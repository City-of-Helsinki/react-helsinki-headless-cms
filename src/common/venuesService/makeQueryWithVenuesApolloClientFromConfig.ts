import type * as Apollo from '@apollo/client';

import useVenuesApolloClientFromConfig from '../../core/configProvider/useVenuesApolloClientFromConfig';

type Modify<T, R> = Omit<T, keyof R> & R;

type UseQuery<Q, V extends Apollo.OperationVariables> = (
  baseOptions?: Modify<
    Apollo.QueryHookOptions<Q, V>,
    {
      client?: Apollo.ApolloClient<Apollo.NormalizedCacheObject> | 'disabled';
    }
  >,
) => Apollo.QueryResult<Q, V>;

export default function makeQueryWithVenuesApolloClientFromConfig<
  Q,
  V extends Apollo.OperationVariables,
>(useQuery: UseQuery<Q, V>) {
  return (baseOptions: Apollo.QueryHookOptions<Q, V> = {}) => {
    const venuesApolloClientFromConfig = useVenuesApolloClientFromConfig();

    return useQuery({
      client: venuesApolloClientFromConfig,
      ...baseOptions,
    });
  };
}
