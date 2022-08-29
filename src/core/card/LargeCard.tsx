import { IconArrowRight } from 'hds-react';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from './largeCard.module.scss';
import { Tag } from '../../common/components/tag/Tag';
import { LinkBox } from '../linkBox/LinkBox';
import { Link } from '../link/Link';

export type LargeCardProps = {
  id?: string;
  ariaLabel?: string;
  imageLabel?: string;
  imageUrl?: string;
  imagePosition?: 'right' | 'left';
  subTitle?: string;
  text?: string;
  title?: string;
  url?: string;
  className?: string;
  customContent?: React.ReactNode;
  hasLink?: boolean;
  clampText?: boolean;
  target?: '_blank' | '_self';
};

export function LargeCard({
  id,
  ariaLabel,
  className,
  imageUrl,
  imagePosition,
  imageLabel,
  title,
  subTitle,
  text,
  customContent,
  hasLink,
  url,
  clampText,
  target,
}: LargeCardProps) {
  return (
    <LinkBox
      id={id}
      href={url}
      className={classNames(styles.cardLink, className)}
      ariaLabel={ariaLabel || ''}
      target={target}
    >
      <div
        className={classNames(styles[`${imagePosition}`], styles.cardWrapper)}
      >
        {imageUrl && (
          <div
            className={styles.imageWrapper}
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            {imageLabel && (
              <div className={styles.imageLabel}>
                <Tag className={styles.tag}>{imageLabel}</Tag>
              </div>
            )}
          </div>
        )}
        <div className={styles.textWrapper}>
          {title && <div className={styles.title}>{title}</div>}
          {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
          <div className={classNames(styles.text, clampText && styles.clamp)}>
            {text}
          </div>
          {customContent && (
            <div className={styles.customContent}>{customContent}</div>
          )}
          {url && hasLink && (
            <div className={styles.buttonWrapper}>
              <Link
                href={url}
                target={target}
                iconLeft={<IconArrowRight aria-hidden="true" />}
                showExternalIcon={false}
              />
            </div>
          )}
        </div>
      </div>
    </LinkBox>
  );
}
