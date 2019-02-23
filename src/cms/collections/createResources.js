import { isoToLanguage } from '../../helpers/languageConversions';

const langaugeInstance = (required = true) => [
  {
    name: 'resources_title',
    label: 'Title',
    widget: 'string',
    required,
  },
  {
    name: 'body',
    label: 'Content',
    widget: 'markdown',
    required,
  },
];

const buildTranslation = isoKey => ({
  label: isoToLanguage(isoKey),
  name: isoKey,
  widget: 'object',
  fields: langaugeInstance(false),
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
    ...langaugeInstance(true),
    ...translations(isoKeys),
  ],
});

export default createResource;
