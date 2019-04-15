/**
 * Imports tooling required to build mock data
 */
import faker from 'faker';

/**
 * ISO 639-3 (https://en.wikipedia.org/wiki/ISO_639-3) associated with a language used in the project.
 */
export type TisoKey = 'eng' | 'afr' | 'spa' | 'xho' | 'nso' | 'por' | 'sot' | 'tsn' | 'zul';
export const isoKeys = ['eng', 'afr', 'spa', 'xho', 'nso', 'por', 'sot', 'tsn', 'zul'];
export const mockIsoKey = () => faker.random.arrayElement(isoKeys) as TisoKey;

/**
 * TODO: Description
 */
export type TnativeName =
  | 'English'
  | 'Afrikaans'
  | 'Español'
  | 'IsiXhosa'
  | 'Northern Sotho'
  | 'Português'
  | 'Southern Sotho'
  | 'Tswana'
  | 'isiZulu';
export const nativeNames = [
  'English',
  'Afrikaans',
  'Español',
  'IsiXhosa',
  'Northern Sotho',
  'Português',
  'Southern Sotho',
  'Tswana',
  'isiZulu',
];
export const mockNativeName = (): TnativeName =>
  faker.random.arrayElement(nativeNames) as TnativeName;

/**
 * TODO: Description.
 */
export interface Tlanguage {
  isoKey: TisoKey;
  nativeName: TnativeName;
}
export const languages = isoKeys.map((isoKey, index) => ({
  isoKey,
  nativeName: nativeNames[index],
}));
export const mockLanguage = (): Tlanguage => faker.random.arrayElement(languages) as Tlanguage;
