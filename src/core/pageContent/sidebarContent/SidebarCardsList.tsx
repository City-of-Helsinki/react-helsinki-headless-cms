import React from 'react';

import { LayoutCards } from '../../../common/headlessService/types';
import { SimpleCard } from '../../pageModules/CardsModule/SimpleCard';
import styles from './sidebarCardsList.module.scss';

type CardsListItemProps = Omit<LayoutCards, '__typename'>;

export default function SidebarCardsList({ cards }: CardsListItemProps) {
  if (cards?.length === 0) {
    return null;
  }

  return (
    <div className={styles.cardsContainer}>
      {cards.map((card) => (
        <SimpleCard
          title={card.title}
          icon={card.icon}
          description={card.description}
          backgroundColor={card.backgroundColor}
          linkUrl={card.link.url}
          linkTitle={card.link.title}
          linkTarget={card.link.target}
          direction="vertical"
        />
      ))}
    </div>
  );
}
