import React from 'react';
import classNames from 'classnames';
import { IconEnvelope, IconPhone, IconSize } from 'hds-react';

import LinkBase from './LinkBase';
import { useConfig } from '../configProvider/useConfig';
import styles from './Link.module.scss';
import { findAllElementsOfType } from '../utils/findAllElementsOfType';

export type LinkProps = Omit<
  React.ComponentPropsWithoutRef<'a'>,
  'target' | 'href' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'
> & {
  /**
   * Link href.
   */
  href?: string;
  /**
   * Link left icon component.
   */
  iconLeft?: React.ReactNode;
  /**
   * Link right icon component.
   */
  iconRight?: React.ReactNode;
  /**
   * Boolean indicating whether the external icon is shown.
   */
  showExternalIcon?: boolean;
  /**
   * Boolean indicating whether the link should be opened in a new tab.
   */
  openInNewTab?: boolean;
  /**
   * Link text font size.
   */
  size?: 'S' | 'M' | 'L';
  /**
   * Link variant.
   */
  variant?: 'default' | 'arrowRight';
  /**
   * Additional children to render inside the Link.
   */
  children?: React.ReactNode;
  /**
   * Additinal classname applied to the Link.
   */
  className?: string;
  /**
   * Boolean indicating whether the icons should be displayed with inline styling.
   */
  inlineIcons?: boolean;
};

// TODO: LinkBase component should be replaced with hds Link, when all features are supported
// issue is created to hds: https://github.com/City-of-Helsinki/helsinki-design-system/issues/808

export function Link({
  href = '#',
  children,
  showExternalIcon: forceShowExternalIcon,
  openInNewTab: forceOpenInNewTab,
  className,
  size = 'M',
  iconRight,
  inlineIcons,
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
  const iconSize = size === 'S' ? IconSize.ExtraSmall : IconSize.Small;
  const hasImageInLink = findAllElementsOfType(children, ['img']).length > 0;
  // The external links should always open in a new tab.
  const openInNewTab = forceOpenInNewTab ?? isExternal;
  // If the link contains an image, the external icon should be hidden by default,
  // because an icon next to image does not look good.
  const showExternalIcon =
    forceShowExternalIcon ?? (isExternal && !hasImageInLink);
  const linkComponent = (
    <LinkBase
      size={size}
      {...delegatedProps}
      href={href}
      openInNewTab={openInNewTab}
      external={isExternal}
      showExternalIcon={showExternalIcon}
      className={classNames(styles.link, className, {
        [styles.imgLink]: hasImageInLink,
      })}
      openInExternalDomainAriaLabel={openInExternalDomainAriaLabel}
      openInNewTabAriaLabel={openInNewTabAriaLabel}
      iconRight={
        iconRight ??
        (isEmail && <IconEnvelope size={iconSize} aria-hidden />) ??
        (isPhone && <IconPhone size={iconSize} aria-hidden />)
      }
      inlineIcons={inlineIcons}
      disableVisitedStyles
    >
      {children ?? ''}
    </LinkBase>
  );

  return isExternal || typeof RoutedLink === 'undefined' ? (
    // ts(2786) - Type 'Element | { linkComponent: Element; }' is not assignable to type 'ReactNode'.
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{linkComponent}</>
  ) : (
    <RoutedLink href={href}>{linkComponent}</RoutedLink>
  );
}
