import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Button, IconAngleRight } from 'hds-react';

import styles from '../pageModules.module.scss';
import colorStyles from '../../styles/background.module.scss';
import { getColor, getIconName } from '../../utils/string';
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
  direction = 'vertical',
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
      // todo: router push, we dont have router in the hcrc?
    }
  };

  return (
    <div
      className={classNames(
        styles.cardWrapper,
        backgroundColor &&
          colorStyles[`background${getColor(backgroundColor)}`],
        direction && styles[direction],
      )}
    >
      {icon && (
        <div
          className={classNames(
            styles.cardIconWrapper,
            direction && styles[direction],
          )}
        >
          <Icon name={getIconName(icon)} />
        </div>
      )}
      <div className={styles.cardContent}>
        {title && <div className={styles.title}>{title}</div>}
        {description && <div className={styles.description}>{description}</div>}
        {linkTitle && linkUrl && (
          <div className={styles.button}>
            <Button
              style={direction === 'vertical' ? { width: '100%' } : {}}
              variant="secondary"
              theme="black"
              onClick={handleClick}
              iconRight={<IconAngleRight />}
            >
              {linkTitle}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
