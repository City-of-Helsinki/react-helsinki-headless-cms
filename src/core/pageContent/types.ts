import type { BreadcrumbListItem, BreadcrumbProps, KorosType } from 'hds-react';

import type { ArticleType, PageType } from '../../common/headlessService/types';
import type { Breadcrumb as CmsBreadcrumb } from '../../common/headlessService/__generated__';
import type { Collection } from '../collection/Collection';
import type SidebarContent from './sidebarContent/SidebarContent';
import type { PageContentLayout } from './PageContentLayout';

export type HeroProps = {
  title?: string;
  description?: string;
  backgroundColor?: string;
  korosType?: KorosType;
  actionUrl?: string;
  actionUrlTarget?: string;
  actionText?: string;
  isPageType?: boolean;
};

export type LinkItem = {
  target?: string | null;
  title: string;
  url: string;
};

export type BreadcrumbUnionType =
  | BreadcrumbProps
  | BreadcrumbListItem[]
  | CmsBreadcrumb[];

export type PageContentProps = {
  page?: PageType | ArticleType;
  breadcrumbs?:
    | BreadcrumbUnionType
    | ((page?: PageType | ArticleType) => BreadcrumbUnionType);
  content?:
    | React.ReactNode
    | ((page: PageType | ArticleType) => React.ReactNode);
  shareLinks?: React.ReactNode;
  collections?:
    | React.ReactElement<typeof Collection>[]
    | ((
        page: PageType | ArticleType,
      ) => React.ReactElement<typeof Collection>[]);
  heroContainer?: JSX.Element;
  backUrl?: string;
  sidebarContentProps?: Partial<typeof SidebarContent>;
  PageContentLayoutComponent?: typeof PageContentLayout;
  className?: string;
  onArticlesSearch?: (tag: string) => void;
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
} & Partial<typeof PageContentLayout>;
