import React from 'react';

import { PageContext } from './PageContext';

export function usePageContext() {
  return React.useContext(PageContext);
}
