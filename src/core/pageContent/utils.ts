import { PageModule } from "../../common/headlessService/types";
import {
  isLayoutArticle,
  isLayoutPage,
} from "../../common/headlessService/utils";
import { CardProps } from "../card/Card";
import { CollectionType } from "../collection/types";

export function getCollections(pageModules: PageModule[]): CollectionType[] {
  return (
    pageModules
      ?.map((module, index) => {
        if (isLayoutArticle(module)) {
          return {
            id: index.toString(),
            title: module.title,
            items: module.articles,
          };
        }
        if (isLayoutPage(module)) {
          return {
            id: index.toString(),
            title: module.title,
            items: module.pages,
          };
        }
        return null;
      })
      .filter((collection) => collection !== null) ?? []
  );
}

export function getCollectionCards(
  collection: CollectionType,
  defaultImageUrl?: string
): CardProps[] {
  const cards = collection.items.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.link,
    imageUrl: item.featuredImage?.node?.mediaItemUrl || defaultImageUrl,
    ariaLabel: "",
    className: "",
    imageLabel: "",
    subTitle: "",
    text: item.lead,
    customContent: "",
    hasLink: true,
    withBorder: false,
    withShadow: true,
    clampText: false,
    direction: "responsive" as CardProps["direction"],
    target: "_self" as CardProps["target"],
  }));
  return cards;
}