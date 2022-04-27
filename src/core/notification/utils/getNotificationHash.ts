import hash from "../../../common/utils/hash";
import { NotificationType } from "../../../common/headlessService/types";

// The notification is a singleton in the CMS. Instead of there being multiple
// notifications, there ever only is one which is edited according to current
// needs.

// Because this notification comes with a dismissal option, we have to be able
// to distinct different versions of the notification, so that we can safely
// determine that the user has previously dismissed this notification (and
// received) the urgent information that's within the notification.
export default function getNotificationHash(
  notification?: NotificationType | null
) {
  // Notification fields used to build string for unique hash
  const stringKeys = [
    "title",
    "content",
    "linkText",
    "linkUrl",
    "level",
    "endDate",
    "startDate",
  ] as const;
  const combinedString = stringKeys.reduce(
    (acc, current) => acc + (notification?.[current] ?? ""),
    ""
  );

  return hash(combinedString);
}
