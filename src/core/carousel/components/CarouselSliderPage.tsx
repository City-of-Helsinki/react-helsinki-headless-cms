import React from 'react';
import classNames from 'classnames';

import styles from '../carousel.module.scss';
import { getItemSetItemKey, getItemSetKey } from '../utils/utils';
import { MOBILE_WIDTH } from '../constants';
import { useCarouselContext } from '../context/CarouselContext';

export function CarouselSliderPage({
  itemSet,
  itemSetIndex,
}: {
  itemSet: React.ReactElement[];
  itemSetIndex: number;
}) {
  const { currentSlide, width, itemsShownOnDesktop, itemsShownOnMobile } =
    useCarouselContext();
  const itemsPerSlide =
    (width > MOBILE_WIDTH ? itemsShownOnDesktop : itemsShownOnMobile) ?? 1;
  const styleWidth = `${100 / itemsPerSlide}%`;
  return (
    <li
      ref={(node) =>
        node && node.toggleAttribute('inert', itemSetIndex !== currentSlide)
      }
      aria-hidden={itemSetIndex !== currentSlide}
      key={getItemSetKey(
        itemSetIndex,
        'id' in itemSet && typeof itemSet.id === 'string'
          ? itemSet.id
          : undefined,
      )}
      className={classNames(
        styles.slide,
        itemSetIndex === currentSlide && styles.slideSelected,
      )}
    >
      <div className={styles.slideItems}>
        {itemSet.map((item, itemIndex) => (
          <div
            key={getItemSetItemKey(
              itemIndex,
              'id' in itemSet && typeof itemSet.id === 'string'
                ? itemSet.id
                : undefined,
              `itemSet-${itemSetIndex}-item`,
            )}
            className={styles.slideItem}
            style={{
              width: styleWidth,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </li>
  );
}
