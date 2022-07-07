import makeQueryWithEventsApolloClientFromConfig from './makeQueryWithEventsApolloClientFromConfig';
import {
  useEventsByIdsQuery as useEventsByIdsQueryWithoutClient,
  EventsByIdsQuery,
  EventsByIdsQueryVariables,
} from './__generated__';

export const useEventsByIdsQuery = makeQueryWithEventsApolloClientFromConfig<
  EventsByIdsQuery,
  EventsByIdsQueryVariables
>(useEventsByIdsQueryWithoutClient);

export {
  EventsByIdsQuery,
  EventsByIdsQueryVariables,
  EventsByIdsDocument,
} from './__generated__';
