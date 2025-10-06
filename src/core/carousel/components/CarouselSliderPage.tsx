import React from 'react';
import classNames from 'classnames';

import styles from '../carousel.module.scss';
import { getItemSetItemKey, getItemSetKey } from '../utils/utils';
import { MOBILE_WIDTH } from '../constants';
import { useCarouselContext } from '../context/CarouselContext';

export function CarouselSliderPage({ itemSet, itemSetIndex }) {
  const { currentSlide, width, itemsShownOnDesktop, itemsShownOnMobile } =
    useCarouselContext();
  const styleWidth = `${
    100 / (width > MOBILE_WIDTH ? itemsShownOnDesktop : itemsShownOnMobile)
  }%`;
  return (
    <li
      ref={(node) =>
        node && itemSetIndex !== currentSlide && node.setAttribute('inert', '')
      }
      aria-hidden={itemSetIndex !== currentSlide}
      key={getItemSetKey(itemSet, itemSetIndex)}
      className={classNames(
        styles.slide,
        itemSetIndex === currentSlide && styles.slideSelected,
      )}
    >
      <div className={styles.slideItems}>
        {itemSet.map((item, itemIndex) => (
          <div
            key={getItemSetItemKey(item, itemSetIndex, itemIndex)}
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
