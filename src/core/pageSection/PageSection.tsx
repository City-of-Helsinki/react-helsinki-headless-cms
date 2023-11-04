import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Koros } from 'hds-react';

import styles from './pageSection.module.scss';
import { BackgroundImage } from '../image/BackgroundImage';

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
  const Wrapper = backgroundImageUrl ? BackgroundImage : 'div';
  return (
    <Wrapper
      id={backgroundImageUrl ?? 'page-section'}
      url={backgroundImageUrl}
      className={classNames(
        styles.pageSection,
        korosTop && styles.withKorosTop,
        korosBottom && styles.withKorosBottom,
        className,
      )}
    >
      {korosTop && (
        <Koros
          flipVertical
          className={classNames(styles.korosTop, korosTopClassName)}
        />
      )}
      {korosBottom && (
        <Koros
          className={classNames(styles.korosBottom, korosBottomClassName)}
        />
      )}
      {children}
    </Wrapper>
  );
}
