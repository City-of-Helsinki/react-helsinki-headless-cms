import { createContext } from 'react';

import type { TemplateEnum } from '../../core';

type ApolloPageContextType = {
  /**
   * Uri of the page.
   */
  uri?: string;
  /**
   * Page tyoe template.
   */
  template?: TemplateEnum;
};

const ApolloPageContext = createContext<ApolloPageContextType>({});

export default ApolloPageContext;
