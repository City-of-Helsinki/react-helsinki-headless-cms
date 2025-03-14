import React from 'react';

import { LanguageCodeEnum } from '../../common/headlessService/types';
import { useNotificationQuery } from '../../common/headlessService/notification';
import { useConfig } from '../../core/configProvider/useConfig';
import type { NotificationProps } from '../../core/notification/Notification';
import { Notification as NotificationWithoutData } from '../../core/notification/Notification';

const languageCodeEnumToNotificationLanguageMap = {
  [LanguageCodeEnum.Fi]: 'fi',
  [LanguageCodeEnum.Sv]: 'sv',
  [LanguageCodeEnum.En]: 'en',
} as const;

export type Props = Exclude<NotificationProps, 'notification'>;

export function Notification(props: Props) {
  const { currentLanguageCode } = useConfig();
  const { data } = useNotificationQuery({
    variables: {
      language: languageCodeEnumToNotificationLanguageMap[currentLanguageCode],
    },
  });

  return (
    <NotificationWithoutData {...props} notification={data?.notification} />
  );
}
