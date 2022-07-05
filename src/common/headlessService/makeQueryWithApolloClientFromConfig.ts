import * as Apollo from '@apollo/client';

import useApolloClientFromConfig from '../../core/configProvider/useApolloClientFromConfig';

type UseQuery<Q, V> = (
  baseOptions?: Apollo.QueryHookOptions<Q, V>,
) => Apollo.QueryResult<Q, V>;

export default function makeQueryWithApolloClientFromConfig<Q, V>(
  useQuery: UseQuery<Q, V>,
) {
  return (baseOptions: Apollo.QueryHookOptions<Q, V> = {}) => {
    const apolloClientFromConfig = useApolloClientFromConfig();

    return useQuery({
      client: apolloClientFromConfig,
      ...baseOptions,
    });
  };
}
