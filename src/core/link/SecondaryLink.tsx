/* eslint-disable import/prefer-default-export */
import { IconAngleRight } from 'hds-react';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { Link, LinkProps } from './Link';
import styles from './Link.module.scss';

type SecondaryLinkProps = LinkProps & {
  variant?: 'default' | 'arrowRight';
};

export function SecondaryLink({
  className,
  children,
  variant = 'default',
  ...delegatedProps
}: SecondaryLinkProps) {
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
