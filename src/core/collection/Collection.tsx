import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Button, LoadingSpinner } from 'hds-react';

import styles from './collection.module.scss';
import { Carousel, CarouselProps } from '../carousel/Carousel';
import { Card, CardProps } from '../card/Card';
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
import { Config } from '../configProvider/configContext';
import { ModuleItemTypeEnum } from '../../common/headlessService/constants';
import { Link } from '../link/Link';
import { useVenuesByIdsQuery } from '../../common/venuesService/__generated__';
import { VenueType } from '../../common/venuesService/types';
import { LanguageCodeEnum } from '../../common/headlessService/types';
import {
  convertDateStringInPastToNow,
  getVenueIds,
  isEventClosed,
  normalizeParamsValues,
} from './utils';
import { DEFAULT_LOCALE } from '../../constants';
import { isPageType, isArticleType } from '../../common/headlessService/utils';

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
        <CollectionGrid cards={cards} {...collectionContainerProps} />
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
        <div
          className={classNames(
            styles.headerRow,
            showAllUrl ? styles.withShowAll : '',
          )}
        >
          {title && (
            <>
              <h1
                className={classNames(
                  styles.heading,
                  type === 'carousel' && styles.carousel,
                )}
              >
                {title}
              </h1>
              {showAllUrl && showAllText && (
                <Link className={styles.showAll} href={showAllUrl}>
                  {showAllText}
                </Link>
              )}
            </>
          )}
        </div>
        {description && <p className={styles.description}>{description}</p>}
        {componentForType[type]}
      </div>
    </div>
  );
}

export function getEventCollectionCards({
  items,
  getRoutedInternalHref,
  getEventCardProps,
  EventCardContent,
  HelsinkiCityOwnedIcon,
  organisationPrefixes,
  locale = DEFAULT_LOCALE,
}: {
  items: EventType[];
  getRoutedInternalHref: Config['utils']['getRoutedInternalHref'];
  getEventCardProps: Config['utils']['getEventCardProps'];
  EventCardContent: React.FC<Record<string, unknown>>;
  HelsinkiCityOwnedIcon: React.FC<Record<string, unknown>>;
  organisationPrefixes: string[];
  locale?: string;
}) {
  const cards = items
    .map((item) => getEventCardProps(item, organisationPrefixes, locale))
    .map((cardProps, i) => {
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
          titleIcon={
            cardProps.withTitleIcon &&
            HelsinkiCityOwnedIcon && <HelsinkiCityOwnedIcon />
          }
        />
      );
    });
  return cards;
}

export type EventSearchCollectionProps = Omit<CollectionProps, 'cards'> & {
  collection: EventSearchCollectionType;
  convertPastDatesToNow?: boolean;
};

/**
 * EventSearchCollection uses an (LinkedEvents) URL to make a API query to fetch the related events.
 *
 * Use `convertPastDatesToNow = true` to fix an issue (between the CMS and the LinkedEvents) when old ended events are shown.
 */
export function EventSearchCollection({
  collection,
  convertPastDatesToNow = true,
  ...delegatedProps
}: EventSearchCollectionProps) {
  const eventsApolloClient = useEventsApolloClientFromConfig();
  const {
    currentLanguageCode,
    organisationPrefixes,
    utils: { getRoutedInternalHref, getEventCardProps },
    components: { EventCardContent, HelsinkiCityOwnedIcon },
  } = useConfig();
  const { url } = collection;
  // TODO: use initAmountOfEvents -field when it's null-issue is fixed
  // initAmountOfEvents only in case if load more is implemented (this feature is skipped now)
  const pageSize = 9; // collection.initAmountOfEvents

  const searchParams = new URLSearchParams(
    url.split('?')[1] ?? url.split('?')[0],
  );
  const params = Object.fromEntries(searchParams.entries());
  const normalizedParams = normalizeParamsValues(params);
  const start = convertPastDatesToNow
    ? convertDateStringInPastToNow(normalizedParams.start)
    : normalizedParams.start;
  const variables = {
    ...normalizedParams,
    start,
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

  const cards = getEventCollectionCards({
    items: eventsList?.data ?? [],
    getRoutedInternalHref: (link, type) =>
      getRoutedInternalHref(link, type ?? ModuleItemTypeEnum.Event),
    getEventCardProps,
    EventCardContent,
    HelsinkiCityOwnedIcon,
    organisationPrefixes,
    locale: currentLanguageCode,
  });

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
    currentLanguageCode,
    organisationPrefixes,
    utils: { getRoutedInternalHref, getEventCardProps },
    components: { EventCardContent, HelsinkiCityOwnedIcon },
  } = useConfig();
  // TODO: use initAmountOfEvents -field when it's null-issue is fixed
  const pageSize = collection.events.length; // collection.initAmountOfEvents

  const { data, loading } = useEventsByIdsQuery({
    client: eventsApolloClient !== 'disabled' && eventsApolloClient,
    ssr: false,
    notifyOnNetworkStatusChange: true,
    skip: collection.events.length === 0,
    variables: {
      ids: collection.events,
      pageSize,
      include: ['in_language', 'keywords', 'location', 'audience'],
      eventType: [EventTypeId.General, EventTypeId.Course],
    },
  });

  // Reduce past events that are no longer available and therefore do not need to be displayed
  const eventsListFiltered = data?.eventsByIds.data.filter(
    (event) => !isEventClosed(event),
  );

  const eventsListSorted = [];

  // sorting events in the same order it was defined in cms
  if (eventsListFiltered?.length > 0) {
    collection.events.forEach((eventId) => {
      const event = eventsListFiltered.find(
        (eventData) => eventData.id === eventId,
      );
      if (event) {
        eventsListSorted.push(event);
      }
    });
  }

  if (!data && loading) {
    return (
      <div className={styles.loadingSpinnerWrapper}>
        <LoadingSpinner multicolor />
      </div>
    );
  }

  const cards = getEventCollectionCards({
    items: eventsListSorted ?? [],
    getRoutedInternalHref: (link, type) =>
      getRoutedInternalHref(link, type ?? ModuleItemTypeEnum.Event),
    getEventCardProps,
    EventCardContent,
    HelsinkiCityOwnedIcon,
    organisationPrefixes,
    locale: currentLanguageCode,
  });

  return <Collection {...delegatedProps} cards={cards} />;
}

export function getLocationsCollectionCards({
  items,
  getRoutedInternalHref,
  getLocationCardProps,
  VenueCardContent,
  HelsinkiCityOwnedIcon,
}: {
  items: VenueType[];
  getRoutedInternalHref: Config['utils']['getRoutedInternalHref'];
  getLocationCardProps: Config['utils']['getLocationCardProps'];
  VenueCardContent: React.FC<Record<string, unknown>>;
  HelsinkiCityOwnedIcon: React.FC<Record<string, unknown>>;
}) {
  const cards = items
    .map((item) => getLocationCardProps(item))
    .map((cardProps, i) => {
      const url = getRoutedInternalHref(
        cardProps.url,
        ModuleItemTypeEnum.Venue,
      );
      return (
        <Card
          key={cardProps.id}
          {...cardProps}
          url={url}
          titleIcon={
            cardProps.withTitleIcon &&
            HelsinkiCityOwnedIcon && <HelsinkiCityOwnedIcon />
          }
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
    utils: { getRoutedInternalHref, getLocationCardProps },
    components: { VenueCardContent, HelsinkiCityOwnedIcon },
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

  const cards = getLocationsCollectionCards({
    items: venuesList ?? [],
    getRoutedInternalHref: (link) =>
      getRoutedInternalHref(link, ModuleItemTypeEnum.Venue),
    getLocationCardProps,
    VenueCardContent,
    HelsinkiCityOwnedIcon,
  });

  return <Collection {...delegatedProps} cards={cards} />;
}

export type PageArticleCollectionProps = Omit<CollectionProps, 'cards'> & {
  collection: GeneralCollectionType;
};

export function PageArticleCollection({
  collection,
  ...delegatedProps
}: PageArticleCollectionProps) {
  const {
    utils: { getRoutedInternalHref, getArticlePageCardProps },
  } = useConfig();

  const cards = collection.items
    .reduce((result: CardProps[], item) => {
      if (isPageType(item) || isArticleType(item))
        result.push(getArticlePageCardProps(item));
      return result;
    }, [])
    .map((cardProps) => {
      const url = getRoutedInternalHref(cardProps.url, null);
      return (
        <Card
          key={cardProps.id}
          {...cardProps}
          url={url}
          direction="fixed-vertical"
        />
      );
    });

  return (
    <Collection
      {...delegatedProps}
      showAllUrl={collection.showAllUrl}
      cards={cards}
    />
  );
}
