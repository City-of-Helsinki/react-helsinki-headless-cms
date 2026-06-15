import { use } from 'react';

import { PageContext } from './PageContext';

export function usePageContext() {
  return use(PageContext);
}
