import { useContext } from 'react';

import apolloPageContext from './apolloPageContext';

export default function useApolloPageContext() {
  return useContext(apolloPageContext);
}
