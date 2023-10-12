import { KorosType } from 'hds-react';

export type Breadcrumb = {
  title: string;
  link: string;
};

export type HeroProps = {
  title?: string;
  description?: string;
  backgroundClassName?: string;
  korosType?: KorosType;
  actionUrl?: string;
  actionText?: string;
};
