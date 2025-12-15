import { graphql, HttpResponse } from 'msw';

import languages from '../../responses/cms/languages/hobbies-languages.json';
import { LanguagesDocument } from '../../../apollo';

export const queryLanguages = () =>
  graphql.query(LanguagesDocument, () =>
    HttpResponse.json({
      data: languages,
    }),
  );
