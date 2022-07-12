import { createContext } from 'react';

import { TemplateEnum } from '../../core';

type ApolloPageContext = {
  uri?: string;
  template?: TemplateEnum;
};

const apolloPageContext = createContext<ApolloPageContext>({});

export default apolloPageContext;
