import { LanguageCodeEnum } from '../../common/headlessService/__generated__';
import { Config } from '../configProvider/configContext';
import { FallbackTranslationKey } from './types';

export const getTranslationWithFallback = (
  config: Config,
  field: FallbackTranslationKey,
  language: LanguageCodeEnum,
): string => config.copy[field] ?? config.fallbackTranslations[field][language];
