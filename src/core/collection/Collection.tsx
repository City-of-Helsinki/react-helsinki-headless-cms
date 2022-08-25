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
import { getNextPage } from '../../common/eventsService/utils';
import { LINKED_EVENTS_ENDPOINT } from '../../constants';
import { ModuleItemTypeEnum } from '../../common/headlessService/constants';

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
    copy: { loadMoreButtonLabelText },
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
    grid: (
      <>
        <CollectionGrid
          cards={cards}
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

  return (
    <div className={classNames(styles[type], className)}>
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
  EventCardContent: (props: any) => JSX.Element,
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
    return (
      <Card
        key={cardProps.id}
        {...cardProps}
        url={url}
        direction="fixed-vertical"
        customContent={<EventCardContent {...cardProps} />}
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
  const [isFetchingMore, setIsFetchingMore] = React.useState(false);
  const {
    utils: { getRoutedInternalHref },
    components: { EventCardContent },
  } = useConfig();
  const { url } = collection;
  // TODO: use initAmountOfEvents -field when it's null-issue is fixed
  const pageSize = 4; // collection.initAmountOfEvents

  if (!url.startsWith(LINKED_EVENTS_ENDPOINT)) {
    throw new Error('Illegal LinkedEvents origin set!');
  }

  const { searchParams } = new URL(url);
  const params = Object.fromEntries(searchParams.entries());
  const variables = { ...normalizeKeys(params), pageSize };

  const { data, loading, fetchMore } = useEventListQuery({
    client: eventsApolloClient !== 'disabled' && eventsApolloClient,
    ssr: false,
    notifyOnNetworkStatusChange: true,
    variables,
  });

  const eventsList = data?.eventList;

  if (!data && loading) {
    return (
      <div className={styles.loadingSpinnerWrapper}>
        <LoadingSpinner />
      </div>
    );
  }

  const handleLoadMore = async () => {
    const page = eventsList.meta ? getNextPage(eventsList.meta) : null;
    setIsFetchingMore(true);
    if (page) {
      await fetchMore({
        variables: {
          page,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;
          return {
            ...prevResult,
            eventList: {
              ...fetchMoreResult.eventList,
              data: [
                ...prevResult.eventList.data,
                ...fetchMoreResult.eventList.data,
              ],
            },
          };
        },
      });
    }
    setIsFetchingMore(false);
  };

  const onShowAll = () => {
    // eslint-disable-next-line no-console
    console.info('TODO: not implemented yet');
  };

  const cards = getEventCollectionCards(
    collection,
    eventsList?.data ?? [],
    (link, type) =>
      getRoutedInternalHref(link, type ?? ModuleItemTypeEnum.Event),
    EventCardContent,
  );

  return (
    <Collection
      {...delegatedProps}
      cards={cards}
      onShowAll={onShowAll}
      onLoadMore={handleLoadMore}
      hasNext={!!eventsList.meta.next}
      loading={isFetchingMore}
    />
  );
}

export type EventSelectionCollectionProps = Omit<CollectionProps, 'cards'> & {
  collection: EventSelectionCollectionType;
};

export function EventSelectionCollection({
  collection,
  ...delegatedProps
}: EventSelectionCollectionProps) {
  const eventsApolloClient = useEventsApolloClientFromConfig();
  const [isFetchingMore, setIsFetchingMore] = React.useState(false);
  const {
    utils: { getRoutedInternalHref },
    components: { EventCardContent },
  } = useConfig();
  // TODO: use initAmountOfEvents -field when it's null-issue is fixed
  const pageSize = 4; // collection.initAmountOfEvents

  const { data, loading, fetchMore } = useEventsByIdsQuery({
    client: eventsApolloClient !== 'disabled' && eventsApolloClient,
    ssr: false,
    notifyOnNetworkStatusChange: true,
    variables: {
      ids: collection.events,
      pageSize,
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

  const handleLoadMore = async () => {
    const page = eventsList.meta ? getNextPage(eventsList.meta) : null;
    setIsFetchingMore(true);
    if (page) {
      await fetchMore({
        variables: {
          page,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;
          return {
            ...prevResult,
            eventsByIds: {
              ...fetchMoreResult.eventsByIds,
              data: [
                ...prevResult.eventsByIds.data,
                ...fetchMoreResult.eventsByIds.data,
              ],
            },
          };
        },
      });
    }
    setIsFetchingMore(false);
  };

  const onShowAll = () => {
    // eslint-disable-next-line no-console
    console.info('TODO: not implemented yet');
  };

  const cards = getEventCollectionCards(
    collection,
    eventsList?.data ?? [],
    (link, type) =>
      getRoutedInternalHref(link, type ?? ModuleItemTypeEnum.Event),
    EventCardContent,
  );

  return (
    <Collection
      {...delegatedProps}
      cards={cards}
      onLoadMore={handleLoadMore}
      onShowAll={onShowAll}
      hasNext={!!eventsList.meta.next}
      loading={isFetchingMore}
    />
  );
}
