import React from 'react';

import type { PageContextProps } from './PageContext';
import { PageContext } from './PageContext';

export type PageContextProviderProps = PageContextProps & {
  children: React.ReactNode;
};

export function PageContextProvider({
  page,
  children,
}: PageContextProviderProps) {
  const context: PageContextProps = React.useMemo(
    () => ({ page }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page?.id, page?.uri],
  );
  return (
    <PageContext.Provider value={context}>{children}</PageContext.Provider>
  );
}
