import React from "react";

import { LanguageCodeEnum } from "../../common/headlessService/types";
import { useNotificationQuery } from "../../common/headlessService/notification";
import useConfig from "../../core/configProvider/useConfig";
import {
  Notification as NotificationWithoutData,
  NotificationProps,
} from "../../core/notification/Notification";

const languageCodeEnumToNotificationLanguageMap = {
  [LanguageCodeEnum.Fi]: "fi",
  [LanguageCodeEnum.Sv]: "sv",
  [LanguageCodeEnum.En]: "en",
} as const;

type Props = Exclude<NotificationProps, "notification">;

export default function Notification(props: Props) {
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
