import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Button, IconAngleRight } from 'hds-react';

import styles from '../pageModules.module.scss';
import colorStyles from '../../styles/background.module.scss';
import {
  getColor,
  getIconName,
  getTextFromHtml,
  isWhiteText,
} from '../../utils/string';
import { Icon } from './Icon';
import { useConfig } from '../../configProvider/useConfig';

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
  const {
    utils: { redirectToUrl },
  } = useConfig();

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = () => {
    if (linkUrl) {
      if (linkTarget === '_blank') {
        openInNewTab(linkUrl);
      } else {
        redirectToUrl(linkUrl);
      }
    }
  };

  return (
    <div
      className={classNames(
        styles.cardWrapper,
        backgroundColor &&
          colorStyles[`background${getColor(backgroundColor)}`],
        backgroundColor &&
          isWhiteText(backgroundColor) &&
          colorStyles.whiteText,
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
        {title && (
          <div
            className={classNames(
              styles.title,
              backgroundColor &&
                isWhiteText(backgroundColor) &&
                colorStyles.whiteText,
            )}
          >
            {title}
          </div>
        )}
        {description && (
          <div
            className={classNames(
              styles.description,
              backgroundColor &&
                isWhiteText(backgroundColor) &&
                colorStyles.whiteText,
            )}
          >
            {getTextFromHtml(description)}
          </div>
        )}
        {linkTitle && linkUrl && (
          <div
            className={classNames(
              styles.button,
              backgroundColor &&
                isWhiteText(backgroundColor) &&
                colorStyles.whiteButton,
            )}
          >
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
