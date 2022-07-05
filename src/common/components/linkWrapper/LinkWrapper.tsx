import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from './linkWrapper.module.scss';
import ExternalLink from '../externalLink/ExternalLink';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  children?: JSX.Element | string;
  iconLeft?: JSX.Element;
  className?: string;
  target?: '_blank' | '_self';
  href?: string;
  ariaLabel?: string;
};

export default function LinkWrapper({
  children,
  iconLeft,
  className,
  target = '_self',
  ariaLabel,
  href,
  ...props
}: Props) {
  if (!href) return <div>{children}</div>;

  return (
    <>
      {target === '_self' && (
        <a
          aria-label={ariaLabel}
          className={classNames(styles.link, className)}
          href={href}
          {...props}
        >
          {iconLeft && iconLeft}
          {children && children}
        </a>
      )}
      {target === '_blank' && (
        <ExternalLink
          iconLeft={iconLeft}
          className={classNames(styles.link, className)}
          ariaLabel={ariaLabel}
          href={href}
          {...props}
        >
          {children && children}
        </ExternalLink>
      )}
    </>
  );
}
