import PageContent, { PageContentProps } from "./pageContent/PageContent";

export { default as ConfigProvider } from "./configProvider/ConfigProvider";
export { default as defaultConfig } from "./configProvider/defaultConfig";

export * from "../common/headlessService/types";

export { default as Link, LinkProps } from "./link/Link";

export {
  default as Navigation,
  NavigationProps,
} from "./navigation/Navigation";

export {
  default as Notification,
  NotificationProps,
} from "./notification/Notification";

export { default as Page, PageProps } from "./page/Page";

export { getCollections } from "./pageContent/utils";

export type { Breadcrumb } from "./pageContent/types";

export {
  default as Collection,
  CollectionProps,
} from "./collection/Collection";

export type { CollectionType, CollectionItemType } from "./collection/types";

export { default as Carousel, CarouselProps } from "./carousel/Carousel";

export { default as Card, CardProps } from "./card/Card";

export { PageContent, PageContentProps };
