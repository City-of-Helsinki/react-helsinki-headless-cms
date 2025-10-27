import type * as Apollo from '@apollo/client';

import useApolloClientFromConfig from '../../core/configProvider/useApolloClientFromConfig';
import type { Exact } from './__generated__';

type UseQuery<Q, V extends Apollo.OperationVariables> = (
  baseOptions: Apollo.QueryHookOptions<Q, V> &
    (
      | { variables: Exact<{ id: string }>; skip?: boolean | undefined }
      | { skip: boolean }
    ),
) => Apollo.QueryResult<Q, V>;

export default function makeQueryWithApolloClientFromConfig<
  Q,
  V extends Apollo.OperationVariables,
>(useQuery: UseQuery<Q, V>) {
  return (baseOptions: Apollo.QueryHookOptions<Q, V> = {}) => {
    const apolloClientFromConfig = useApolloClientFromConfig();

    return useQuery({
      client: apolloClientFromConfig,
      ...baseOptions,
      skip: baseOptions.skip || false,
    });
  };
}
