import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Koros } from 'hds-react';

import styles from './pageSection.module.scss';

export type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  korosTop?: boolean;
  korosTopClassName?: string;
  korosBottom?: boolean;
  korosBottomClassName?: string;
};

export function PageSection({
  className,
  children,
  korosTop,
  korosTopClassName,
  korosBottom,
  korosBottomClassName,
}: PageSectionProps) {
  return (
    <div
      className={classNames(
        className,
        styles.pageSection,
        korosTop && styles.withKorosTop,
        korosBottom && styles.withKorosBottom,
      )}
    >
      {korosTop && (
        <Koros
          flipHorizontal
          className={classNames(korosTopClassName, styles.korosTop)}
        />
      )}
      {korosBottom && (
        <Koros
          className={classNames(korosBottomClassName, styles.korosBottom)}
        />
      )}
      {children}
    </div>
  );
}
