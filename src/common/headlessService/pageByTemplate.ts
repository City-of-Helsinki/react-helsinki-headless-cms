import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type {
  PageByTemplateQuery,
  PageByTemplateQueryVariables,
} from './__generated__';
import { usePageByTemplateQuery as usePageByTemplateQueryWithoutClient } from './__generated__';

export const usePageByTemplateQuery = makeQueryWithApolloClientFromConfig<
  PageByTemplateQuery,
  PageByTemplateQueryVariables
>(usePageByTemplateQueryWithoutClient);

export {
  type PageByTemplateQuery,
  type PageByTemplateQueryVariables,
  PageByTemplateDocument,
} from './__generated__';
