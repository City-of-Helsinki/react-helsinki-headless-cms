import { NonEmptyLanguage } from './types';
import { Language } from '../../common/headlessService/types';

export const isNonEmptyLanguage = (
  language?: Language | null,
): language is NonEmptyLanguage => Boolean(language?.name && language?.code);
