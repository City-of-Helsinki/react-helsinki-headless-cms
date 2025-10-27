import type { LanguageOption } from 'hds-react';

import type { NonEmptyLanguage } from './types';

/** Map a NonEmptyLanguage to a primary LanguageOption. */
const toPrimaryLanguageOption = (
  language: NonEmptyLanguage,
): LanguageOption => ({
  label: language.name ?? '',
  value: language.code?.toLowerCase() ?? '',
  isPrimary: true,
});

export default toPrimaryLanguageOption;
