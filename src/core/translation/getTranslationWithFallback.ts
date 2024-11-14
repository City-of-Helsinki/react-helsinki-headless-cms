import type { LanguageCodeEnum } from '../../common/headlessService/__generated__';
import type { Config } from '../configProvider/configContext';
import type { FallbackTranslationKey } from './types';

export const getTranslationWithFallback = (
  config: Config,
  field: FallbackTranslationKey,
  language: LanguageCodeEnum,
): string => config.copy[field] ?? config.fallbackTranslations[field][language];
