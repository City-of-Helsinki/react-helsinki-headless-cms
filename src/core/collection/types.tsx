import type { ArticleType, PageType } from '../../common/headlessService/types';
import type { EventType } from '../../common/eventsService/types';
import type {
  EventDetails,
  Meta,
} from '../../common/eventsService/__generated__';
import type { VenueType } from '../../common/venuesService/types';

// TODO: HCRC-13 - Support also the event selection and the event search modules
export type CollectionItemType = ArticleType | PageType | EventType | VenueType;

export type GeneralCollectionType = {
  id?: string;
  title?: string;
  description?: string;
  items: CollectionItemType[];
  showAllUrl?: string;
  __typename: string;
};

export type EventSelectionCollectionType = Omit<
  GeneralCollectionType,
  'items'
> & {
  events: string[];
};

export type LocationsSelectionCollectionType = Omit<
  GeneralCollectionType,
  'items'
> & {
  venues: number[];
};

export type EventSearchCollectionType = Omit<GeneralCollectionType, 'items'> & {
  url: string;
};

export type CollectionType =
  | GeneralCollectionType
  | EventSelectionCollectionType
  | EventSearchCollectionType
  | LocationsSelectionCollectionType;

export type EventListResponse = {
  __typename?: 'EventListResponse';
  meta: Meta;
  data: Array<EventDetails>;
};
