/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import LinkBase from './LinkBase';
import { useConfig } from '../configProvider/useConfig';
import styles from './Link.module.scss';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  ariaLabel?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  showExternalIcon?: boolean;
  size?: 'S' | 'M' | 'L';
  variant?: 'default' | 'arrowRight';
};

// TODO: LinkBase component should be replaced with hds Link, when all features are supported
// issue is created to hds: https://github.com/City-of-Helsinki/helsinki-design-system/issues/808

export function Link({
  href,
  target,
  children,
  ariaLabel,
  showExternalIcon = true,
  className,
  size = 'M',
  ...delegatedProps
}: LinkProps) {
  const {
    utils: { getIsHrefExternal },
    components: { Link: RoutedLink },
  } = useConfig();

  const isOpenInNewTab = target === '_blank';
  const isExternal = getIsHrefExternal(href);

  const linkComponent = (
    <LinkBase
      size={size}
      {...delegatedProps}
      href={href}
      openInNewTab={isOpenInNewTab}
      external={isExternal}
      showExternalIcon={isExternal && showExternalIcon}
      ariaLabel={ariaLabel}
      className={classNames(styles.link, className)}
      disableVisitedStyles
    >
      {children as string}
    </LinkBase>
  );

  return isExternal || typeof RoutedLink === 'undefined' ? (
    <>{linkComponent}</>
  ) : (
    <RoutedLink href={href}>{linkComponent}</RoutedLink>
  );
}
