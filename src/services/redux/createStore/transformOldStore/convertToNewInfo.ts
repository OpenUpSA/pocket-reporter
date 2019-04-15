/**
 * Import TypeScript static types
 */
/**
 * Converts old language keys to ISO 639-2 standard.
 */
const convertOldLanguagesToIsoCodes = locale => {
  switch (locale) {
    case 'en-za':
      return 'eng';
    case 'af':
      return 'afr';
    case 'es':
      return 'spa';
    case 'xh':
      return 'xho';
    case 'nso':
      return 'nso';
    case 'pt':
      return 'por';
    case 'st':
      return 'sot';
    case 'tn':
      return 'tsn';
    case 'ZU':
      return 'zul';
    default:
      return null;
  }
};

const convertToNewInfo = locale => ({
  lastAction: null,
  language: convertOldLanguagesToIsoCodes(locale),
  joined: null,
});

export default convertToNewInfo;
