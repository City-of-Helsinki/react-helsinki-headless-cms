import makeQueryWithEventsApolloClientFromConfig from './makeQueryWithEventsApolloClientFromConfig';
import type {
  EventsByIdsQuery,
  EventsByIdsQueryVariables,
} from './__generated__';
import { useEventsByIdsQuery as useEventsByIdsQueryWithoutClient } from './__generated__';

export const useEventsByIdsQuery = makeQueryWithEventsApolloClientFromConfig<
  EventsByIdsQuery,
  EventsByIdsQueryVariables
  // @ts-expect-error: The Apollo Client's QueryHookOptions client property is typed as optional, but makeQueryWithEventsApolloClientFromConfig expects it to be potentially 'disabled'.
>(useEventsByIdsQueryWithoutClient);

export {
  EventsByIdsQuery,
  EventsByIdsQueryVariables,
  EventsByIdsDocument,
} from './__generated__';
