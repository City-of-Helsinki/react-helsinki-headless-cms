import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Tag as HDSTag } from 'hds-react';

import styles from './tag.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
  selected?: boolean;
  variant?: 'default' | 'card' | 'search';
  onClick?: () => void;
};

export function Tag({
  className,
  variant = 'default',
  children,
  featured,
  selected,
  onClick,
}: Props) {
  const handleClick = (): void => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <HDSTag
      onClick={handleClick}
      {...(!onClick && { tabindex: -1 })}
      className={classNames(
        styles.tag,
        styles[`variant-${variant}`],
        featured && styles.featured,
        selected && styles.selected,
        !onClick && styles.noOutline,
        className,
      )}
    >
      {children}
    </HDSTag>
  );
}
