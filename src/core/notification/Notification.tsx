import React from 'react';
import type { NotificationType as HDSNotificationLevel } from 'hds-react';
import { Notification as HDSNotification } from 'hds-react';

import makeLocaleStorageValue from '../../common/utils/makeLocaleStorageValue';
import type { NotificationType } from '../../common/headlessService/types';
import { HtmlToReact } from '../../common/components/htmlToReact/HtmlToReact';
import { useConfig } from '../configProvider/useConfig';
import { Link } from '../link/Link';
import getNotificationHash from './utils/getNotificationHash';
import getIsNotificationActive from './utils/getIsNotificationActive';
import styles from './notification.module.scss';

enum NotificationStatus {
  dismissed,
  expired,
  visible,
  missing,
}

type NotificationState = {
  dismissed: boolean;
};

const useLocaleStorageNotification = makeLocaleStorageValue<{
  [notificationHash: string]: NotificationState;
}>('rhhc/notification');

function getNotificationStatus(
  notification: NotificationType,
  notificationState: NotificationState,
) {
  if (!notification) {
    return NotificationStatus.missing;
  }

  if (notificationState?.dismissed) {
    return NotificationStatus.dismissed;
  }

  if (!getIsNotificationActive(notification)) {
    return NotificationStatus.expired;
  }

  return NotificationStatus.visible;
}

type CmsNotificationLevel = 'info' | 'high' | 'low';
const notificationTypeMap: Record<CmsNotificationLevel, HDSNotificationLevel> =
  {
    info: 'alert',
    high: 'error',
    low: 'info',
  };

export type NotificationProps = {
  /**
   * Notification object.
   */
  notification?: NotificationType | null;
};

export function Notification({ notification }: NotificationProps) {
  const {
    copy: { closeButtonLabelText },
    utils: { getRoutedInternalHref },
  } = useConfig();
  const [notificationState, setNotificationState] =
    useLocaleStorageNotification();

  const notificationHash = getNotificationHash(notification);
  const notificationStatus = getNotificationStatus(
    notification,
    notificationState?.[notificationHash],
  );

  const { level, title, linkUrl, linkText, content } = notification ?? {};

  const handleClose = () => {
    setNotificationState({
      [notificationHash]: {
        dismissed: true,
      },
    });
  };

  return (
    notificationStatus === NotificationStatus.visible && (
      <HDSNotification
        type={notificationTypeMap[(level as CmsNotificationLevel) ?? 'info']}
        label={title ?? undefined}
        dismissible
        closeButtonLabelText={closeButtonLabelText}
        onClose={handleClose}
        className={styles.notification}
      >
        <HtmlToReact>{content}</HtmlToReact>
        {linkUrl && (
          <Link
            openInNewTab
            href={getRoutedInternalHref(linkUrl)}
            style={{ marginTop: '0.75rem', display: 'block' }}
          >
            {linkText}
          </Link>
        )}
      </HDSNotification>
    )
  );
}
