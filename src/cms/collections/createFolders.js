import { isoToLanguage } from '../../helpers/languageConversions';

const buildTranslation = isoKey => ({
  label: `${isoToLanguage(isoKey)} Title`,
  name: `${isoKey}-title`,
  widget: 'string',
  required: false,
});

const removeEnglish = key => key !== 'eng';

const translations = isoKeys => isoKeys
  .filter(removeEnglish)
  .map(buildTranslation);


const createFolders = () => ({
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
    ...translations(isoKeys)
    {
      name: 'icon',
      label: 'Icon',
      widget: 'icon-selector',
    },
    {
      name: 'questions',
      label: '✏️ Questions Title',
      widget: 'list',
      fields: [{
        label: 'Title',
        collection: 'questions',
        valueField: 'questions_title',
        searchFields: ['questions_title'],
        widget: 'relation',
        required: false,
      }],
    },
    {
      name: 'resources',
      label: '📚 Resource Title',
      widget: 'list',
      fields: [{
        label: 'Title',
        collection: 'resources',
        valueField: 'resources_title',
        searchFields: ['resources_title'],
        widget: 'relation',
        required: false,
      }],
    },
  ],
});

export default createFolders;
