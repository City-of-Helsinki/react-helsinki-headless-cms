import { LayoutArticle, LayoutPage } from "../../common/headlessService/types";

// TODO: HCRC-13 - Support also the event selection and the event search modules
export type CollectionItemType =
  | LayoutArticle["articles"][number]
  | LayoutPage["pages"][number];

export type CollectionType = {
  id?: string;
  title?: string;
  items: CollectionItemType[];
};
