import { isoToLanguage } from '../../helpers/languageConversions';

const langaugeInstance = [
  {
    name: 'resources_title',
    label: 'Title',
    widget: 'string',
  },
  {
    name: 'body',
    label: 'Content',
    widget: 'markdown',
  },
];

const buildTranslation = isoKey => ({
  label: isoToLanguage(isoKey),
  name: isoKey,
  widget: 'object',
  fields: langaugeInstance,
});

const removeEnglish = key => key !== 'eng';

const translations = isoKeys => isoKeys
  .filter(removeEnglish)
  .map(buildTranslation);

const createResource = isoKeys => ({
  name: 'resources',
  identifier_field: 'resources_title',
  label: '📚 Resources',
  folder: 'src/data/resources/',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'resources',
    },
    ...langaugeInstance,
    ...translations(isoKeys),
  ],
});

export default createResource;
