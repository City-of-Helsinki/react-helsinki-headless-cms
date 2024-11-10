import { createContext } from 'react';

import type { TemplateEnum } from '../../core';

type ApolloPageContext = {
  /**
   * Uri of the page.
   */
  uri?: string;
  /**
   * Page tyoe template.
   */
  template?: TemplateEnum;
};

const apolloPageContext = createContext<ApolloPageContext>({});

export default apolloPageContext;
