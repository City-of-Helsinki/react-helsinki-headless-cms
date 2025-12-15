import React from 'react';
import classNames from 'classnames';
import { Koros } from 'hds-react';

import styles from './pageSection.module.scss';
import { BackgroundImage } from '../image/BackgroundImage';

export type PageSectionProps = {
  /**
   * Additional children to render inside the Page section.
   */
  children: React.ReactNode;
  /**
   * Additional classname for the Page section.
   */
  className?: string;
  /**
   * Boolean indicating whether the koros top shouyld be displayed.
   */
  korosTop?: boolean;
  /**
   * Custom top koros classname.
   */
  korosTopClassName?: string;
  /**
   * Boolean indicating whether the koros bottom shouyld be displayed.
   */
  korosBottom?: boolean;
  /**
   * Custom bottom koros classname.
   */
  korosBottomClassName?: string;
  /**
   * Backgroud image url.
   */
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
