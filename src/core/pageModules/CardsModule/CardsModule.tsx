import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from '../pageModules.module.scss';
import { SimpleCard } from './SimpleCard';

type Card = {
  backgroundColor?: string;
  description?: string;
  icon?: string;
  title?: string;
  link?: {
    target?: string;
    title?: string;
    url?: string;
  };
};

export type CardsModuleProps = {
  items: Card[];
};

// todo: implement module
export function CardsModule({ items }: CardsModuleProps) {
  return (
    <div
      className={classNames(
        styles.pageModuleWrapper,
        styles.cardsWrapper,
        items.length < 4 && styles.flexWrapper,
        items.length === 1 && styles.singleGridWrapper,
      )}
    >
      {items?.map((card) => (
        <SimpleCard
          title={card.title}
          description={card.description}
          linkTarget={card.link.target}
          linkTitle={card.link.title}
          linkUrl={card.link.url}
          backgroundColor={card.backgroundColor}
          direction={items.length === 1 ? 'horisontal' : 'vertical'}
          icon={card.icon}
        />
      ))}
    </div>
  );
}
