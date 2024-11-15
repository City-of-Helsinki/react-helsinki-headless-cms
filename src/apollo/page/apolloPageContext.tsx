import { createContext } from 'react';

import type { TemplateEnum } from '../../core';

type ApolloPageContext = {
  uri?: string;
  template?: TemplateEnum;
};

const apolloPageContext = createContext<ApolloPageContext>({});

export default apolloPageContext;
