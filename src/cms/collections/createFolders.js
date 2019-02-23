

import { isoToLanguage } from '../../helpers/languageConversions';

const langaugeInstance = (required = true) => [
  {
    name: 'folders_title',
    label: 'Folder Title',
    widget: 'string',
    required,
  },
  {
    name: 'questions_link',
    label: '✏️ Questions Title',
    widget: 'list',
    field: {
      name: 'title',
      label: 'Title',
      collection: 'questions',
      valueField: 'questions_title',
      searchFields: ['questions_title'],
      widget: 'relation',
      required: false,
    },
  },
  {
    name: 'resources_link',
    label: '📚 Resource Title',
    widget: 'list',
    field: {
      name: 'title',
      label: 'Title',
      collection: 'resources',
      valueField: 'resources_title',
      searchFields: ['resources_title'],
      widget: 'relation',
      required: false,
    },
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

const createFolders = isoKeys => ({
  name: 'folders',
  label: '📁 Folders',
  folder: 'src/data/folders/',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'resourcefolders',
    },
    {
      name: 'icon',
      label: 'Icon',
      widget: 'icon-selector',
    },
    ...langaugeInstance(true),
    ...translations(isoKeys),
  ],
});

export default createFolders;
