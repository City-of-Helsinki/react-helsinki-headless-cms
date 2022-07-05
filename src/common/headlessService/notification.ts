import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import {
  useNotificationQuery as useNotificationQueryWithoutClient,
  NotificationQuery,
  NotificationQueryVariables,
} from './__generated__';

export const useNotificationQuery = makeQueryWithApolloClientFromConfig<
  NotificationQuery,
  NotificationQueryVariables
>(useNotificationQueryWithoutClient);

export {
  NotificationQuery,
  NotificationQueryVariables,
  NotificationDocument,
} from './__generated__';
