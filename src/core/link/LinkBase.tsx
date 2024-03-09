// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { IconLinkExternal } from 'hds-react';
import React, { Children, isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';

import styles from './LinkBase.module.scss';

// copied from helsinki-design-system
// TODO: LinkBase component should be replaced with hds Link, when all features are supported
// issue is created to hds: https://github.com/City-of-Helsinki/helsinki-design-system/issues/808

export type LinkProps = Omit<
  React.ComponentPropsWithoutRef<'a'>,
  'target' | 'href' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'
> & {
  /**
   * Link content
   */
  children: ReactNode;
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
   * Aria label for opening link in a new tab
   */
  openInNewTabAriaLabel?: string;
  /**
   * Aria label for opening link in an external domain
   */
  openInExternalDomainAriaLabel?: string;
  /**
   * Size of the link
   */
  size?: 'S' | 'M' | 'L';
  /**
   * Additional styles
   */
  style?: React.CSSProperties;
  inlineIcons?: boolean;
};

type LinkToIconSizeMappingType = {
  L: 'l';
  M: 's';
  S: 'xs';
};

const hasChildren = (
  element: ReactNode,
): element is ReactElement<{ children: ReactNode[] }> =>
  isValidElement<{ children?: ReactNode[] }>(element) &&
  Boolean(element.props.children);

const childToString = (child?: ReactNode): string => {
  if (
    typeof child === 'undefined' ||
    child === null ||
    typeof child === 'boolean'
  ) {
    return '';
  }

  if (JSON.stringify(child) === '{}') {
    return '';
  }

  return (child as number | string).toString();
};

export const getTextFromReactChildren = (children: ReactNode): string => {
  if (!(children instanceof Array) && !isValidElement(children)) {
    return childToString(children);
  }

  return Children.toArray(children).reduce(
    (text: string, child: ReactNode): string => {
      let newText = '';

      if (isValidElement(child) && hasChildren(child)) {
        newText = getTextFromReactChildren(child.props.children);
      } else if (isValidElement(child) && !hasChildren(child)) {
        newText = '';
      } else {
        newText = childToString(child);
      }

      return text.concat(newText);
    },
    '',
  ) as string;
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
      openInExternalDomainAriaLabel,
      openInNewTabAriaLabel,
      style = {},
      size = 'M',
      inlineIcons,
      ...rest
    }: LinkProps,
    ref: React.Ref<HTMLAnchorElement>,
  ) => {
    const composeAriaLabel = () => {
      let childrenText = getTextFromReactChildren(children);
      const newTabText = openInNewTab
        ? openInNewTabAriaLabel || 'Avautuu uudessa välilehdessä.'
        : '';
      const externalText = external
        ? openInExternalDomainAriaLabel || 'Siirtyy toiseen sivustoon.'
        : '';

      if (
        childrenText &&
        childrenText.slice(-1) !== '.' &&
        (newTabText || externalText)
      ) {
        childrenText = `${childrenText}.`;
      }

      const label = [childrenText, newTabText, externalText]
        .filter((text) => text)
        .join(' ');
      if (!label.trim()) {
        return undefined;
      }
      return label;
    };
    const mapLinkSizeToExternalIconSize: LinkToIconSizeMappingType = {
      L: 'l',
      M: 's',
      S: 'xs',
    };

    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a
        className={classNames(
          styles.link,
          styles[`link${size}`],
          disableVisitedStyles ? styles.disableVisitedStyles : '',
          className,
        )}
        href={href}
        style={style}
        ref={ref}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
        aria-label={composeAriaLabel()}
        {...rest}
      >
        {iconLeft && (
          <span className={styles.iconLeft} aria-hidden="true">
            {iconLeft}
          </span>
        )}
        <span
          className={classNames(
            styles.content,
            iconLeft && styles.withLeftIcon,
          )}
        >
          {children}
          {inlineIcons && showExternalIcon && external && (
            <IconLinkExternal
              size={mapLinkSizeToExternalIconSize[size]}
              className={classNames(
                styles.icon,
                size === 'L'
                  ? styles.verticalAlignBigIcon
                  : styles.verticalAlignSmallOrMediumIcon,
                styles.inline,
              )}
              aria-hidden
            />
          )}
          {!inlineIcons && iconRight && (
            <span
              className={classNames(
                styles.iconRight,
                size === 'L'
                  ? styles.verticalAlignBigIcon
                  : styles.verticalAlignSmallOrMediumIcon,
                styles.inline,
              )}
              aria-hidden="true"
            >
              {iconRight}
            </span>
          )}
        </span>
        {!inlineIcons && showExternalIcon && external && (
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
        {!inlineIcons && iconRight && (
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
