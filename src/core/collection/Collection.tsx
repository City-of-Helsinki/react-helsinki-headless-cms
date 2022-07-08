import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { LoadingSpinner } from 'hds-react';

import styles from './collection.module.scss';
import { Carousel, CarouselProps } from '../carousel/Carousel';
import { Card } from '../card/Card';
import Grid, { GridProps } from '../../common/components/grid/Grid';
import {
  useEventListQuery,
  useEventsByIdsQuery,
} from '../../common/eventsService/__generated__';
import {
  EventSearchCollectionType,
  EventSelectionCollectionType,
  GeneralCollectionType,
} from './types';
import { EventType } from '../../common/eventsService/types';
import { useConfig } from '../configProvider/useConfig';
import useEventsApolloClientFromConfig from '../configProvider/useEventsApolloClientFromConfig';
import { getCollectionCards } from '../pageContent/utils';
import { Config } from '../configProvider/configContext';
import normalizeKeys from '../../linkedEvents/utils/normalizeKeys';

const LINKED_EVENTS_ENDPOINT =
  process.env.LINKED_EVENTS_ENDPOINT ??
  'https://api.hel.fi/linkedevents/v1/event/';

export type CollectionProps = {
  title?: string;
  description?: string;
  cards: React.ReactElement<typeof Card>[];
  className?: string;
  collectionContainerProps?:
    | Partial<CarouselProps<typeof Card>>
    | Partial<GridProps>;
  type: 'carousel' | 'grid';
};

export function CollectionGrid({
  cards,
  ...rest
}: {
  cards: React.ReactElement<typeof Card>[];
}) {
  return (
    <div className={styles.gridWrapper}>
      <Grid className={styles.grid} {...rest}>
        {cards}
      </Grid>
    </div>
  );
}

export function CollectionCarousel({
  cards,
  ...rest
}: {
  cards: React.ReactElement<typeof Card>[];
}) {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel className={styles.carousel} {...rest}>
        {cards}
      </Carousel>
    </div>
  );
}

export function Collection({
  title,
  description,
  cards,
  className,
  collectionContainerProps,
  type = 'grid',
}: CollectionProps) {
  const componentForType: Record<CollectionProps['type'], JSX.Element> = {
    carousel: (
      <CollectionCarousel cards={cards} {...collectionContainerProps} />
    ),
    grid: <CollectionGrid cards={cards} {...collectionContainerProps} />,
  };

  return (
    <div
      className={classNames(styles.collectionWrapper, styles[type], className)}
    >
      <div className={styles.collection}>
        {title && <h1 className={styles.heading}>{title}</h1>}
        {description && <p className={styles.description}>{description}</p>}
        {componentForType[type]}
      </div>
    </div>
  );
}

function getEventCollectionCards(
  collection: EventSelectionCollectionType | EventSearchCollectionType,
  items: EventType[],
  getRoutedInternalHref: Config['utils']['getRoutedInternalHref'],
) {
  const generalCollection: GeneralCollectionType = {
    id: collection.id,
    title: collection.title,
    description: collection.description,
    items,
    __typename: 'GeneralCollectionType',
  };
  const cards = getCollectionCards(generalCollection).map((cardProps) => {
    const url = getRoutedInternalHref(cardProps.url, null);
    return <Card key={cardProps.id} {...cardProps} url={url} />;
  });
  return cards;
}

export type EventSearchCollectionProps = Omit<CollectionProps, 'cards'> & {
  collection: EventSearchCollectionType;
};

export function EventSearchCollection({
  collection,
  ...delegatedProps
}: EventSearchCollectionProps) {
  const useEventsApolloClient = useEventsApolloClientFromConfig();
  const {
    utils: { getRoutedInternalHref },
  } = useConfig();
  const { url } = collection;

  if (!url.startsWith(LINKED_EVENTS_ENDPOINT)) {
    throw new Error('Illegal LinkedEvents origin set!');
  }

  const { searchParams } = new URL(url);
  const params = Object.fromEntries(searchParams.entries());
  const variables = normalizeKeys(params);

  const { data, loading } = useEventListQuery({
    client: useEventsApolloClient,
    variables,
  });

  if (loading) {
    return <LoadingSpinner />;
  }
  const cards = getEventCollectionCards(
    collection,
    [...data.eventList.data],
    getRoutedInternalHref,
  );
  return <Collection {...delegatedProps} cards={cards} />;
}

export type EventSelectionCollectionProps = Omit<CollectionProps, 'cards'> & {
  collection: EventSelectionCollectionType;
};

export function EventSelectionCollection({
  collection,
  ...delegatedProps
}: EventSelectionCollectionProps) {
  const useEventsApolloClient = useEventsApolloClientFromConfig();
  const {
    utils: { getRoutedInternalHref },
  } = useConfig();

  const { data, loading } = useEventsByIdsQuery({
    client: useEventsApolloClient,
    variables: {
      ids: collection.events,
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }
  const cards = getEventCollectionCards(
    collection,
    [...data.eventsByIds.data],
    getRoutedInternalHref,
  );
  return <Collection {...delegatedProps} cards={cards} />;
}
