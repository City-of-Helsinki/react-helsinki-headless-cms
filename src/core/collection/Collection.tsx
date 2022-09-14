import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Button, LoadingSpinner } from 'hds-react';

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
import { ModuleItemTypeEnum } from '../../common/headlessService/constants';
import { Link } from '../link/Link';

export type CollectionProps = {
  title?: string;
  description?: string;
  cards: React.ReactElement<typeof Card>[];
  className?: string;
  collectionContainerProps?:
    | Partial<CarouselProps<typeof Card>>
    | Partial<GridProps>;
  type: 'carousel' | 'grid';
  loading?: boolean;
  hasNext?: boolean;
  onLoadMore?: () => void;
  // TODO: implement the showAll -feature to carousels. Read the showAllLink -field, route it and add a button
  onShowAll?: () => void;
};

export function CollectionGrid({
  cards,
  ...rest
}: {
  cards: React.ReactElement<typeof Card>[];
  onShowAll?: CollectionProps['onShowAll'];
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
  onLoadMore,
  hasMore,
  loading,
  loadMoreButtonLabelText,
  ...rest
}: {
  cards: React.ReactElement<typeof Card>[];
  onShowAll?: CollectionProps['onShowAll'];
  onLoadMore?: CollectionProps['onLoadMore'];
  loading?: CollectionProps['loading'];
  hasMore?: CollectionProps['hasNext'];
  loadMoreButtonLabelText: string;
}) {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        className={styles.carousel}
        onLoadMore={onLoadMore}
        hasMore={hasMore}
        loading={loading}
        loadMoreButtonLabelText={loadMoreButtonLabelText}
        {...rest}
      >
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
  loading = false,
  hasNext = false,
  onLoadMore,
  onShowAll,
}: CollectionProps) {
  const {
    copy: { loadMoreButtonLabelText, showAllText },
    utils: { getShowAllUrl },
  } = useConfig();
  const componentForType: Record<CollectionProps['type'], JSX.Element> = {
    carousel: (
      <CollectionCarousel
        cards={cards}
        onShowAll={onShowAll}
        onLoadMore={onLoadMore}
        hasMore={hasNext}
        loading={loading}
        loadMoreButtonLabelText={loadMoreButtonLabelText}
        {...collectionContainerProps}
      />
    ),
    // todo: initial grid items amout (3) take from config or headless cms when implemented
    grid: (
      <>
        <CollectionGrid
          cards={cards.slice(0, 3)}
          onShowAll={onShowAll}
          {...collectionContainerProps}
        />
        {hasNext && (
          <Button
            className={styles.loadMoreButton}
            onClick={onLoadMore}
            isLoading={loading}
          >
            {loadMoreButtonLabelText}
          </Button>
        )}
      </>
    ),
  };

  const showAllUrl = getShowAllUrl();

  return (
    <div className={classNames(styles[type], className)}>
      <div className={styles.collection}>
        {title && (
          <div className={styles.headerRow}>
            <h1 className={styles.heading}>{title}</h1>
            {showAllUrl && showAllText && (
              <Link className={styles.showAll} href={showAllUrl}>
                {showAllText}
              </Link>
            )}
          </div>
        )}
        {description && <p className={styles.description}>{description}</p>}
        {componentForType[type]}
      </div>
    </div>
  );
}

export function getEventCollectionCards(
  collection: EventSelectionCollectionType | EventSearchCollectionType,
  items: EventType[],
  getRoutedInternalHref: Config['utils']['getRoutedInternalHref'],
  EventCardContent: React.FC<Record<string, unknown>>,
) {
  const generalCollection: GeneralCollectionType = {
    id: collection.id,
    title: collection.title,
    description: collection.description,
    items,
    __typename: 'GeneralCollectionType',
  };
  const cards = getCollectionCards(generalCollection).map((cardProps, i) => {
    const url = getRoutedInternalHref(cardProps.url, null);
    return (
      <Card
        key={cardProps.id}
        {...cardProps}
        url={url}
        direction="fixed-vertical"
        customContent={<EventCardContent event={items[i]} />}
      />
    );
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
  const eventsApolloClient = useEventsApolloClientFromConfig();
  const {
    utils: { getRoutedInternalHref },
    components: { EventCardContent },
  } = useConfig();
  const { url } = collection;
  // TODO: use initAmountOfEvents -field when it's null-issue is fixed
  // initAmountOfEvents only in case if load more is implemented (this feature is skipped now)
  const pageSize = 9; // collection.initAmountOfEvents

  const searchParams = new URLSearchParams(
    url.split('?')[1] ?? url.split('?')[0],
  );
  const params = Object.fromEntries(searchParams.entries());
  const variables = {
    ...normalizeKeys(params),
    pageSize,
    include: ['in_language', 'keywords', 'location', 'audience'],
  };

  const { data, loading } = useEventListQuery({
    client: eventsApolloClient !== 'disabled' && eventsApolloClient,
    ssr: false,
    notifyOnNetworkStatusChange: true,
    variables,
  });

  const eventsList = data?.eventList;

  if (!data && loading) {
    return (
      <div className={styles.loadingSpinnerWrapper}>
        <LoadingSpinner multicolor />
      </div>
    );
  }

  const cards = getEventCollectionCards(
    collection,
    eventsList?.data ?? [],
    (link, type) =>
      getRoutedInternalHref(link, type ?? ModuleItemTypeEnum.Event),
    EventCardContent,
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
  const eventsApolloClient = useEventsApolloClientFromConfig();
  const {
    utils: { getRoutedInternalHref },
    components: { EventCardContent },
  } = useConfig();
  // TODO: use initAmountOfEvents -field when it's null-issue is fixed
  const pageSize = 4; // collection.initAmountOfEvents

  const { data, loading } = useEventsByIdsQuery({
    client: eventsApolloClient !== 'disabled' && eventsApolloClient,
    ssr: false,
    notifyOnNetworkStatusChange: true,
    variables: {
      ids: collection.events,
      pageSize,
      include: ['in_language', 'keywords', 'location', 'audience'],
    },
  });

  const eventsList = data?.eventsByIds;

  if (!data && loading) {
    return (
      <div className={styles.loadingSpinnerWrapper}>
        <LoadingSpinner />
      </div>
    );
  }

  const cards = getEventCollectionCards(
    collection,
    eventsList?.data ?? [],
    (link, type) =>
      getRoutedInternalHref(link, type ?? ModuleItemTypeEnum.Event),
    EventCardContent,
  );

  return <Collection {...delegatedProps} cards={cards} />;
}
