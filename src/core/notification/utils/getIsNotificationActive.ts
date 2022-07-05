import isFuture from 'date-fns/isFuture';
import isPast from 'date-fns/isPast';
import isSameDay from 'date-fns/isSameDay';

import { NotificationType } from '../../../common/headlessService/types';

export default function isNotificationActive(
  notification?: NotificationType | null,
) {
  const { startDate, endDate, title, content } = notification ?? {};
  const isNotificationContentMissing = !content && !title;

  if (!notification || isNotificationContentMissing) {
    return false;
  }

  const isSameDayOrFuture = (date: Date) =>
    isSameDay(new Date(), date) || isFuture(date);

  return [
    // both start and end dates are defined
    () =>
      startDate &&
      endDate &&
      isPast(new Date(startDate)) &&
      isSameDayOrFuture(new Date(endDate)),
    // only end date defined
    () => !startDate && endDate && isSameDayOrFuture(new Date(endDate)),
    // only start date defined
    () => startDate && !endDate && isPast(new Date(startDate)),
    // neither start or end date are defined
    () => !startDate && !endDate,
  ].some((f) => !!f());
}
