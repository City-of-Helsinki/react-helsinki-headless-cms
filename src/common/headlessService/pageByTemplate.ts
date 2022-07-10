import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import {
  usePageByTemplateQuery as usePageByTemplateQueryWithoutClient,
  PageByTemplateQuery,
  PageByTemplateQueryVariables,
} from './__generated__';

export const usePageByTemplateQuery = makeQueryWithApolloClientFromConfig<
  PageByTemplateQuery,
  PageByTemplateQueryVariables
>(usePageByTemplateQueryWithoutClient);

export {
  PageByTemplateQuery,
  PageByTemplateQueryVariables,
  PageByTemplateDocument,
  TemplateEnum,
} from './__generated__';
