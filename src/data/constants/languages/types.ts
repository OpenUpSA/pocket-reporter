/**
 * ISO 639-3 (https://en.wikipedia.org/wiki/ISO_639-3) code for languages used in the project.
 */
export type TisoKey = 'eng' | 'afr' | 'spa' | 'xho' | 'nso' | 'por' | 'sot' | 'tsn' | 'zul';

export interface LanguagesShape {
  isoKeys: TisoKey[];
}
