import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import LinkBase from '../link/LinkBase';
import { useConfig } from '../configProvider/useConfig';
import styles from './LinkBox.module.scss';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  ariaLabel?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

// TODO: this component should be replaced with hds one, when all layouts and directions are supported
// issue is created to hds: https://github.com/City-of-Helsinki/helsinki-design-system/issues/809

export function LinkBox({
  href,
  target,
  children,
  ariaLabel,
  ...delegatedProps
}: LinkProps) {
  const {
    utils: { getIsHrefExternal },
  } = useConfig();

  const isOpenInNewTab = target === '_blank';

  return (
    <div className={styles.linkBoxWrapper}>
      {children}
      <LinkBase
        {...delegatedProps}
        href={href}
        openInNewTab={isOpenInNewTab}
        external={getIsHrefExternal(href)}
        ariaLabel={ariaLabel}
        className={classNames(styles.linkBox)}
        showExternalIcon={false}
        disableVisitedStyles
      >
        {' '}
      </LinkBase>
    </div>
  );
}
