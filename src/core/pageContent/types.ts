import { KorosType } from 'hds-react';

export type Breadcrumb = {
  title: string;
  link: string;
};

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
