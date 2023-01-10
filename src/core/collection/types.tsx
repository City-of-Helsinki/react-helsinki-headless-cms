import { ArticleType, PageType } from '../../common/headlessService/types';
import { EventDetailsType } from '../../common/eventsService/types';
import { EventDetails, Meta } from '../../common/eventsService/__generated__';
import { VenueType } from '../../common/venuesService/types';

// TODO: HCRC-13 - Support also the event selection and the event search modules
export type CollectionItemType =
  | ArticleType
  | PageType
  | EventDetailsType
  | VenueType;

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
