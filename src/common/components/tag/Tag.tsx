import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { RoundedTag as HDSTag } from 'hds-react';

import styles from './tag.module.scss';
import { theme1, theme2 } from './tagThemes';

type Props = {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
  whiteOnly?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

export function Tag({
  className,
  children,
  featured,
  selected,
  whiteOnly,
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
      {...(!onClick && { tabIndex: -1 })}
      theme={featured ? theme2 : theme1}
      className={classNames(
        styles.tag,
        featured && styles.featured,
        selected && styles.selected,
        whiteOnly && styles.whiteOnly,
        onClick && !featured && styles.withHover,
        !onClick && styles.noOutline,
        className,
      )}
    >
      {children}
    </HDSTag>
  );
}
