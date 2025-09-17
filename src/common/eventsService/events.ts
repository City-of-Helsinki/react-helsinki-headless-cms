import useEventsApolloClientFromConfig from '../../core/configProvider/useEventsApolloClientFromConfig';
import { useEventsByIdsQuery as useEventsByIdsQueryWithoutClient } from './__generated__';

export function useEventsByIdsQuery(
  baseOptions: Parameters<typeof useEventsByIdsQueryWithoutClient>[0],
) {
  const client = useEventsApolloClientFromConfig();
  const options = {
    ...baseOptions,
    client: client === 'disabled' ? undefined : client,
  };
  return useEventsByIdsQueryWithoutClient(options);
}

export {
  EventsByIdsQuery,
  EventsByIdsQueryVariables,
  EventsByIdsDocument,
} from './__generated__';
