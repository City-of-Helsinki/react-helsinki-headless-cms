// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from 'msw';

import data from '../../responses/cms/notifications/hobbies-notification-en.json';
import { NotificationDocument } from '../../../common/headlessService/__generated__';

export const queryNotification = () =>
  graphql.query(NotificationDocument, (req, res, ctx) => res(ctx.data(data)));
