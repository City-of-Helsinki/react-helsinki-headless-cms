import { use } from 'react';

import ApolloPageContext from './apolloPageContext';

export default function useApolloPageContext() {
  return use(ApolloPageContext);
}
