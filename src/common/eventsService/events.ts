import makeQueryWithEventsApolloClientFromConfig from './makeQueryWithEventsApolloClientFromConfig';
import type {
  EventsByIdsQuery,
  EventsByIdsQueryVariables,
} from './__generated__';
import { useEventsByIdsQuery as useEventsByIdsQueryWithoutClient } from './__generated__';

export const useEventsByIdsQuery = makeQueryWithEventsApolloClientFromConfig<
  EventsByIdsQuery,
  EventsByIdsQueryVariables
>(useEventsByIdsQueryWithoutClient);

export {
  EventsByIdsQuery,
  EventsByIdsQueryVariables,
  EventsByIdsDocument,
} from './__generated__';
