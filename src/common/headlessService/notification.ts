import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type {
  NotificationQuery,
  NotificationQueryVariables,
} from './__generated__';
import { useNotificationQuery as useNotificationQueryWithoutClient } from './__generated__';

export const useNotificationQuery = makeQueryWithApolloClientFromConfig<
  NotificationQuery,
  NotificationQueryVariables
>(useNotificationQueryWithoutClient);

export {
  NotificationQuery,
  NotificationQueryVariables,
  NotificationDocument,
} from './__generated__';
