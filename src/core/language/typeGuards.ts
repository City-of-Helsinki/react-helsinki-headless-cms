import type { NonEmptyLanguage } from './types';
import type { Language } from '../../common/headlessService/types';

export const isNonEmptyLanguage = (
  language?: Language | null,
): language is NonEmptyLanguage => Boolean(language?.name && language?.code);
