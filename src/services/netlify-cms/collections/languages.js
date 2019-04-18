export const isoKeys = ['eng', 'afr', 'spa', 'xho', 'nso', 'por', 'sot', 'tsn', 'zul'];

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

export const languages = isoKeys.map((isoKey, index) => ({
  isoKey,
  nativeName: nativeNames[index],
}));
