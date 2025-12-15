import classNames from 'classnames';
import React from 'react';

import { HtmlToReact } from '../../../common/components/htmlToReact/HtmlToReact';
import { useConfig } from '../../configProvider/useConfig';
import { Link } from '../../link/Link';
import styles from '../pageModules.module.scss';
import colorStyles from '../../styles/background.module.scss';
import { getColor, isWhiteText } from '../../utils/string';

export type ContentModuleProps = {
  content?: string;
  backgroundColor?: string;
  className?: string;
};

export function ContentModule({
  content,
  backgroundColor,
  className,
}: ContentModuleProps) {
  const {
    htmlSanitizer: { allowedUnsafeTags, trustedOrigins },
  } = useConfig();

  return (
    <div
      className={classNames(
        styles.pageModuleWrapper,
        styles.contentModuleWrapper,
        backgroundColor &&
          colorStyles[`background${getColor(backgroundColor)}`],
        backgroundColor &&
          isWhiteText(backgroundColor) &&
          colorStyles.whiteText,
        backgroundColor ? styles.withPadding : '',
      )}
    >
      <div className={classNames(className)}>
        <HtmlToReact
          components={{
            a: Link,
          }}
          allowedUnsafeTags={allowedUnsafeTags}
          trustedOrigins={trustedOrigins}
        >
          {content || ''}
        </HtmlToReact>
      </div>
    </div>
  );
}
