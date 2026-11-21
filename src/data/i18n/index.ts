import type { Locale, TranslationDictionary } from '../../types/i18n';
import { FR_DICTIONARY } from './fr';
import { IT_DICTIONARY } from './it';

export const DEFAULT_LOCALE: Locale = 'it';
export const SUPPORTED_LOCALES: readonly Locale[] = ['it', 'fr'];

const DICTIONARIES: Record<Locale, TranslationDictionary> = {
  it: IT_DICTIONARY,
  fr: FR_DICTIONARY,
};

export function getDictionary(locale: Locale): TranslationDictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}
