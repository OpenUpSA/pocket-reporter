import { isoToLanguage } from '../../helpers/languageConversions';

const buildTranslation = isoKey => ({
  label: isoToLanguage(isoKey),
  name: isoKey,
  widget: 'string',
  required: false,
  default: ' ',
});

const removeEnglish = key => key !== 'eng';

const translations = isoKeys => isoKeys
  .filter(removeEnglish)
  .map(buildTranslation);


const createFolders = isoKeys => ({
  name: 'folders',
  label: '📁 Folders',
  folder: 'src/data/folders/',
  extension: 'json',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'folders',
    },
    {
      name: 'title',
      label: 'Folder Title',
      widget: 'string',
    },
    {
      name: 'translations',
      label: 'Translations',
      widget: 'object',
      fields: translations(isoKeys),
    },
    {
      name: 'icon',
      label: 'Icon',
      widget: 'icon-selector',
    },
    {
      name: 'questions',
      label: '✏️ Questions Title',
      widget: 'list',
      field: [{
        label: 'Title',
        name: 'content',
        collection: 'questions',
        valueField: 'title',
        searchFields: ['title'],
        widget: 'relation',
        required: false,
        default: ' ',
      }],
    },
    {
      name: 'resources',
      label: '📚 Resource Title',
      widget: 'list',
      field: [{
        label: 'Title',
        name: 'content',
        collection: 'resources',
        valueField: 'title',
        searchFields: ['title'],
        widget: 'relation',
        required: false,
        default: ' ',
      }],
    },
  ],
});

export default createFolders;
