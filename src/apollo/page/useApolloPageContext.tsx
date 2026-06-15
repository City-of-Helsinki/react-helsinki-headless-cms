import { useContext } from 'react';

import ApolloPageContext from './apolloPageContext';

export default function useApolloPageContext() {
  return useContext(ApolloPageContext);
}
