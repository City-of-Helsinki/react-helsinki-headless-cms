// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { IconLinkExternal } from 'hds-react';
import React from 'react';

import styles from './LinkBase.module.scss';

export type LinkProps = Omit<
  React.ComponentPropsWithoutRef<'a'>,
  | 'target'
  | 'href'
  | 'onPointerEnterCapture'
  | 'onPointerLeaveCapture'
  | 'ariaLabel'
> & {
  /**
   * Link content
   */
  children: string;
  /**
   * Boolean indicating whether visited styles of the link are applied
   */
  disableVisitedStyles?: boolean;
  /**
   * Boolean indicating whether the link will lead user to external domain.
   */
  external?: boolean;
  /**
   * Boolean indicating whether the link will lead user to external domain.
   */
  showExternalIcon?: boolean;
  /**
   * Hypertext Reference of the link.
   */
  href: string;
  /**
   * Element placed on the left side of the link text
   */
  iconLeft?: React.ReactNode;
  /**
   * Element placed on the right side of the link text
   */
  iconRight?: React.ReactNode;
  /**
   * Boolean indicating whether the link will open in new tab or not.
   */
  openInNewTab?: boolean;
  /**
   * Size of the link
   */
  size?: 'S' | 'M' | 'L';
  /**
   * Additional styles
   */
  style?: React.CSSProperties;
  ariaLabel?: string;
};

type LinkToIconSizeMappingType = {
  L: 'l';
  M: 's';
  S: 'xs';
};

export default React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      className,
      disableVisitedStyles = true,
      external = false,
      showExternalIcon = true,
      href,
      iconLeft,
      iconRight,
      openInNewTab = false,
      style = {},
      size = 'M',
      ariaLabel,
      ...rest
    }: LinkProps,
    ref: React.Ref<HTMLAnchorElement>,
  ) => {
    const mapLinkSizeToExternalIconSize: LinkToIconSizeMappingType = {
      L: 'l',
      M: 's',
      S: 'xs',
    };

    return (
      <a
        className={classNames(
          styles.link,
          styles[`link${size}`],
          disableVisitedStyles ? styles.disableVisitedStyles : '',
          className,
        )}
        href={href}
        style={style}
        {...(openInNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
        {...{
          'aria-label': ariaLabel,
        }}
        ref={ref}
        {...rest}
      >
        {iconLeft && (
          <span className={styles.iconLeft} aria-hidden="true">
            {iconLeft}
          </span>
        )}
        {children}
        {showExternalIcon && external && (
          <IconLinkExternal
            size={mapLinkSizeToExternalIconSize[size]}
            className={classNames(
              styles.icon,
              size === 'L'
                ? styles.verticalAlignBigIcon
                : styles.verticalAlignSmallOrMediumIcon,
            )}
            aria-hidden
          />
        )}
        {iconRight && (
          <span
            className={classNames(
              styles.iconRight,
              size === 'L'
                ? styles.verticalAlignBigIcon
                : styles.verticalAlignSmallOrMediumIcon,
            )}
            aria-hidden="true"
          >
            {iconRight}
          </span>
        )}
      </a>
    );
  },
);
