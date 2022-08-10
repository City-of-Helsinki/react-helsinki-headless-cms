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
  backgroundImageUrl?: string;
};

export function PageSection({
  className,
  children,
  korosTop,
  korosTopClassName,
  korosBottom,
  korosBottomClassName,
  backgroundImageUrl,
}: PageSectionProps) {
  return (
    <div
      className={classNames(
        className,
        styles.pageSection,
        korosTop && styles.withKorosTop,
        korosBottom && styles.withKorosBottom,
      )}
      style={{ backgroundImage: backgroundImageUrl ?? '' }}
    >
      {korosTop && (
        <Koros
          flipHorizontal
          className={classNames(styles.korosTop, korosTopClassName)}
        />
      )}
      {korosBottom && (
        <Koros
          className={classNames(styles.korosBottom, korosBottomClassName)}
        />
      )}
      {children}
    </div>
  );
}
