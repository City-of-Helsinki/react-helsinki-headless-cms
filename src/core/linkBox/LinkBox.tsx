import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { Link } from '../link/Link';
import styles from './LinkBox.module.scss';

export type LinkProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'target'> & {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  openInNewTab?: boolean;
};

// TODO: this component should be replaced with hds one, when all layouts and directions are supported
// issue is created to hds: https://github.com/City-of-Helsinki/helsinki-design-system/issues/809

export function LinkBox({ children, ...delegatedProps }: LinkProps) {
  return (
    <div className={styles.linkBoxWrapper}>
      {children}
      <Link
        {...delegatedProps}
        className={classNames(styles.linkBox)}
        showExternalIcon={false}
      />
    </div>
  );
}
