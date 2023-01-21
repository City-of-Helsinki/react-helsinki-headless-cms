import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Button, LoadingSpinner } from 'hds-react';

import styles from './collection.module.scss';
import { Carousel, CarouselProps } from '../carousel/Carousel';
import { Card } from '../card/Card';
import Grid, { GridProps } from '../../common/components/grid/Grid';
import {
  EventTypeId,
  useEventListQuery,
  useEventsByIdsQuery,
} from '../../common/eventsService/__generated__';
import {
  EventSearchCollectionType,
  EventSelectionCollectionType,
  GeneralCollectionType,
  LocationsSelectionCollectionType,
} from './types';
import { EventType } from '../../common/eventsService/types';
import { useConfig } from '../configProvider/useConfig';
import useEventsApolloClientFromConfig from '../configProvider/useEventsApolloClientFromConfig';
import useVenuesApolloClientFromConfig from '../configProvider/useVenuesApolloClientFromConfig';
import { getCollectionCards } from '../pageContent/utils';
import { Config } from '../configProvider/configContext';
import normalizeKeys from '../../linkedEvents/utils/normalizeKeys';
import { ModuleItemTypeEnum } from '../../common/headlessService/constants';
import { Link } from '../link/Link';
import { useVenuesByIdsQuery } from '../../common/venuesService/__generated__';
import { VenueType } from '../../common/venuesService/types';
import { LanguageCodeEnum } from '../../common/headlessService/types';
import { getVenueIds } from './utils';

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
  showAllUrl?: string;
  onLoadMore?: () => void;
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
  onLoadMore,
  hasMore,
  loading,
  loadMoreButtonLabelText,
  title,
  ...rest
}: {
  cards: React.ReactElement<typeof Card>[];
  onLoadMore?: CollectionProps['onLoadMore'];
  loading?: CollectionProps['loading'];
  hasMore?: CollectionProps['hasNext'];
  loadMoreButtonLabelText?: string;
  title?: string;
}) {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        title={title}
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
  showAllUrl,
}: CollectionProps) {
  const {
    copy: { loadMoreButtonLabelText, showAllText },
  } = useConfig();
  const componentForType: Record<CollectionProps['type'], JSX.Element> = {
    carousel: (
      <CollectionCarousel
        cards={cards}
        onLoadMore={onLoadMore}
        hasMore={hasNext}
        loading={loading}
        loadMoreButtonLabelText={loadMoreButtonLabelText}
        title={title}
        {...collectionContainerProps}
      />
    ),
    // todo: initial grid items amout (3) take from config or headless cms when implemented
    grid: (
      <>
        <CollectionGrid
          cards={cards.slice(0, 3)}
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
        customContent={
          EventCardContent && <EventCardContent event={items[i]} />
        }
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

  const normalizedParams = { ...normalizeKeys(params) };

  // fix for course event type lower case
  if (normalizedParams.eventType) {
    normalizedParams.eventType =
      normalizedParams.eventType.charAt(0).toUpperCase() +
      normalizedParams.eventType.slice(1);
  }

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
      eventType: [EventTypeId.General, EventTypeId.Course],
    },
  });

  const eventsList = data?.eventsByIds;

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

export function getLocationsCollectionCards(
  collection: LocationsSelectionCollectionType,
  items: VenueType[],
  getRoutedInternalHref: Config['utils']['getRoutedInternalHref'],
  VenueCardContent: React.FC<Record<string, unknown>>,
) {
  const generalCollection: GeneralCollectionType = {
    id: collection.id,
    title: collection.title,
    description: collection.description,
    items,
    __typename: 'GeneralCollectionType',
  };
  const cards = getCollectionCards(generalCollection).map((cardProps, i) => {
    const url = getRoutedInternalHref(cardProps.url, ModuleItemTypeEnum.Venue);
    return (
      <Card
        key={cardProps.id}
        {...cardProps}
        url={url}
        direction="fixed-vertical"
        customContent={
          VenueCardContent && <VenueCardContent location={items[i]} />
        }
      />
    );
  });
  return cards;
}

export type LocationsSelectionCollectionProps = Omit<
  CollectionProps,
  'cards'
> & {
  collection: LocationsSelectionCollectionType;
  locale: LanguageCodeEnum;
};

export function LocationsSelectionCollection({
  collection,
  locale,
  ...delegatedProps
}: LocationsSelectionCollectionProps) {
  const venuesApolloClient = useVenuesApolloClientFromConfig();
  const {
    utils: { getRoutedInternalHref },
    components: { VenueCardContent },
  } = useConfig();

  const { data, loading } = useVenuesByIdsQuery({
    client: venuesApolloClient !== 'disabled' && venuesApolloClient,
    ssr: false,
    notifyOnNetworkStatusChange: true,
    variables: {
      ids: getVenueIds(collection.venues),
    },
    context: {
      headers: {
        'Accept-Language': locale,
      },
    },
  });

  const venuesList = data?.venuesByIds;

  if (!data && loading) {
    return (
      <div className={styles.loadingSpinnerWrapper}>
        <LoadingSpinner multicolor />
      </div>
    );
  }

  const cards = getLocationsCollectionCards(
    collection,
    venuesList ?? [],
    (link) => getRoutedInternalHref(link, ModuleItemTypeEnum.Venue),
    VenueCardContent,
  );

  return <Collection {...delegatedProps} cards={cards} />;
}
