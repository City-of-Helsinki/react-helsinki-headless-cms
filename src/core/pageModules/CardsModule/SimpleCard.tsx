import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Button } from 'hds-react';

import styles from '../PageModules.module.scss';
import colorStyles from '../../styles/background.module.scss';
import { getColor } from '../../utils/string';
import { Icon } from './Icon';

type CardProps = {
  title?: string;
  description?: string;
  backgroundColor?: string;
  icon?: string;
  linkTitle?: string;
  linkTarget?: string;
  linkUrl?: string;
  direction?: 'vertical' | 'horisontal';
};

export function SimpleCard({
  title,
  description,
  backgroundColor,
  icon,
  linkTitle,
  linkTarget,
  linkUrl,
  direction,
}: CardProps) {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = () => {
    if (linkUrl) {
      if (linkTarget === '_blank') {
        openInNewTab(linkUrl);
      }
      // todo: router push?
    }
  };

  return (
    <div
      className={classNames(
        styles.cardWrapper,
        backgroundColor &&
          colorStyles[`background${getColor(backgroundColor)}`],
        direction && direction,
      )}
    >
      {icon && <Icon name="1" />}
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
      {linkTitle && linkUrl && (
        <Button variant="secondary" theme="black" onClick={handleClick}>
          {linkTitle}
        </Button>
      )}
    </div>
  );
}
