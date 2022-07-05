import { ArticleType, PageType } from '../../common/headlessService/types';

// TODO: HCRC-13 - Support also the event selection and the event search modules
export type CollectionItemType = ArticleType | PageType;

export type CollectionType = {
  id?: string;
  title?: string;
  items: CollectionItemType[];
};
