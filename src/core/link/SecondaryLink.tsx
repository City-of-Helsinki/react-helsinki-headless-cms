import { IconAngleRight } from 'hds-react';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import type { LinkProps } from './Link';
import { Link } from './Link';
import styles from './Link.module.scss';

export function SecondaryLink({
  className,
  children,
  variant = 'default',
  ...delegatedProps
}: LinkProps) {
  return (
    <Link
      className={classNames(styles.secondaryLink, className)}
      {...delegatedProps}
      {...(variant === 'arrowRight' && { iconRight: <IconAngleRight /> })}
    >
      {children as string}
    </Link>
  );
}
