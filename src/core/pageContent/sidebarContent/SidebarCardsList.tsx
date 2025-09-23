import React from 'react';

import type { LayoutCards } from '../../../common/headlessService/types';
import { SimpleCard } from '../../pageModules/CardsModule/SimpleCard';
import styles from './sidebarCardsList.module.scss';
import { useConfig } from '../../configProvider/useConfig';
import { getUri } from '../../../common/headlessService/utils';

type CardsListItemProps = Omit<LayoutCards, '__typename'>;

export default function SidebarCardsList({ cards }: CardsListItemProps) {
  const {
    internalHrefOrigins,
    utils: { getIsHrefExternal, getRoutedInternalHref },
  } = useConfig();

  if (cards?.length === 0) {
    return null;
  }

  return (
    <div className={styles.cardsContainer}>
      {cards
        ?.filter((card) => !!card)
        .map((card) => {
          const uri = getUri(
            card.link?.url ?? '#',
            internalHrefOrigins,
            getIsHrefExternal,
          );
          return (
            <SimpleCard
              title={card.title ?? undefined}
              icon={card.icon ?? undefined}
              description={card.description ?? undefined}
              backgroundColor={card.backgroundColor ?? undefined}
              linkUrl={getRoutedInternalHref(uri)}
              linkTitle={card.link?.title ?? undefined}
              linkTarget={card.link?.target ?? undefined}
              direction="vertical"
            />
          );
        })}
    </div>
  );
}
