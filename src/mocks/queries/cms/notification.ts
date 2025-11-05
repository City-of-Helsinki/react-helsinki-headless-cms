import { graphql, HttpResponse } from 'msw';

import data from '../../responses/cms/notifications/hobbies-notification-en.json';
import {
  NotificationDocument,
  type NotificationQuery,
  type NotificationQueryVariables,
} from '../../../common/headlessService/__generated__';

export const queryNotification = () =>
  graphql.query<NotificationQuery, NotificationQueryVariables>(
    NotificationDocument,
    () => HttpResponse.json({ data }),
  );
