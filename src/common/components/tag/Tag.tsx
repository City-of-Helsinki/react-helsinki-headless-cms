import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Tag as HDSTag } from 'hds-react';

import styles from './tag.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
  variant?: 'default' | 'card' | 'search';
  onClick?: () => void;
};

export function Tag({
  className,
  variant = 'default',
  children,
  featured,
  onClick,
}: Props) {
  const [selected, setSelected] = React.useState<boolean>(false);

  const handleClick = (): void => {
    if (onClick) {
      setSelected((prev) => !prev);
      onClick();
    }
  };

  return (
    <HDSTag
      onClick={handleClick}
      className={classNames(
        styles.tag,
        styles[`variant-${variant}`],
        featured && styles.featured,
        selected && styles.selected,
        className,
      )}
    >
      {children}
    </HDSTag>
  );
}
