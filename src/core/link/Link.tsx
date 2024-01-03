/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { IconEnvelope, IconPhone } from 'hds-react';

import LinkBase from './LinkBase';
import { useConfig } from '../configProvider/useConfig';
import styles from './Link.module.scss';

export type LinkProps = Omit<
  React.ComponentPropsWithoutRef<'a'>,
  'target' | 'href' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'
> & {
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  showExternalIcon?: boolean;
  openInNewTab?: boolean;
  size?: 'S' | 'M' | 'L';
  variant?: 'default' | 'arrowRight';
  children?: React.ReactNode;
  className?: string;
};

// TODO: LinkBase component should be replaced with hds Link, when all features are supported
// issue is created to hds: https://github.com/City-of-Helsinki/helsinki-design-system/issues/808

export function Link({
  href,
  children,
  showExternalIcon,
  openInNewTab,
  className,
  size = 'M',
  iconRight,
  ...delegatedProps
}: LinkProps) {
  const {
    utils: { getIsHrefExternal },
    components: { Link: RoutedLink },
    copy: { openInExternalDomainAriaLabel, openInNewTabAriaLabel },
  } = useConfig();

  const isEmail = href?.startsWith('mailto:') || undefined;
  const isPhone = href?.startsWith('tel:') || undefined;
  const isExternal = getIsHrefExternal(href) && !isEmail && !isPhone;
  const iconSize = size === 'S' ? 'xs' : 's';

  const linkComponent = (
    <LinkBase
      size={size}
      {...delegatedProps}
      href={href}
      openInNewTab={openInNewTab ?? isExternal}
      external={isExternal}
      showExternalIcon={showExternalIcon ?? isExternal}
      className={classNames(styles.link, className)}
      openInExternalDomainAriaLabel={openInExternalDomainAriaLabel}
      openInNewTabAriaLabel={openInNewTabAriaLabel}
      iconRight={
        iconRight ??
        (isEmail && <IconEnvelope size={iconSize} aria-hidden />) ??
        (isPhone && <IconPhone size={iconSize} aria-hidden />)
      }
      disableVisitedStyles
    >
      {children ?? ''}
    </LinkBase>
  );

  return isExternal || typeof RoutedLink === 'undefined' ? (
    <>{linkComponent}</>
  ) : (
    <RoutedLink href={href}>{linkComponent}</RoutedLink>
  );
}
