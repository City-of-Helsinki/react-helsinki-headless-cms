import React from 'react';

import type { ArticleType, PageType } from '../../common/headlessService/types';

export type PageContextProps = {
  page: PageType | ArticleType;
};

const initialValue: PageContextProps = { page: null };

export const PageContext = React.createContext<PageContextProps>(initialValue);
