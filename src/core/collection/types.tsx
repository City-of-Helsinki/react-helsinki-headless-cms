import { ArticleType, PageType } from '../../common/headlessService/types';
import { EventType } from '../../common/eventsService/types';
import { EventDetails, Meta } from '../../common/eventsService/__generated__';

// TODO: HCRC-13 - Support also the event selection and the event search modules
export type CollectionItemType = ArticleType | PageType | EventType;

export type GeneralCollectionType = {
  id?: string;
  title?: string;
  description?: string;
  items: CollectionItemType[];
  __typename: string;
};

export type EventSelectionCollectionType = Omit<
  GeneralCollectionType,
  'items'
> & {
  events: string[];
};

export type EventSearchCollectionType = Omit<GeneralCollectionType, 'items'> & {
  url: string;
};

export type CollectionType =
  | GeneralCollectionType
  | EventSelectionCollectionType
  | EventSearchCollectionType;

export type EventListResponse = {
  __typename?: 'EventListResponse';
  meta: Meta;
  data: Array<EventDetails>;
};
