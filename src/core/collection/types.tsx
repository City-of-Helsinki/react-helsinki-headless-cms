import { ArticleType, PageType } from '../../common/headlessService/types';
import { EventType } from '../../common/eventsService/types';

// TODO: HCRC-13 - Support also the event selection and the event search modules
export type CollectionItemType = ArticleType | PageType | EventType;

export type CollectionType = {
  id?: string;
  title?: string;
  description?: string;
  items: CollectionItemType[];
  __typename: string;
};
