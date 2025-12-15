import React from 'react';
import classNames from 'classnames';

import { Link } from '../link/Link';
import styles from './LinkBox.module.scss';

export type LinkProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'target'> & {
  /**
   * Link left icon component.
   */
  iconLeft?: React.ReactNode;
  /**
   * Link right icon component.
   */
  iconRight?: React.ReactNode;
  /**
   * Boolean indicating whether the link should be opened in a new tab.
   */
  openInNewTab?: boolean;
  /**
   * Boolean indicating whether flex attribute should be added to the container of the link.
   */
  flex?: boolean;
};

// TODO: this component should be replaced with hds one, when all layouts and directions are supported
// issue is created to hds: https://github.com/City-of-Helsinki/helsinki-design-system/issues/809

export function LinkBox({ children, flex, ...delegatedProps }: LinkProps) {
  return (
    <div className={classNames(styles.linkBoxWrapper, flex && styles.flex)}>
      {children}
      <Link
        {...delegatedProps}
        className={styles.linkBox}
        showExternalIcon={false}
      />
    </div>
  );
}
