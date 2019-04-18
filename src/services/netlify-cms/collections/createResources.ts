import { languages } from './languages';

const langaugeInstance = (required = true) => [
  {
    name: 'title',
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

const buildTranslation = ({ isoKey, nativeName }) => ({
  label: nativeName,
  name: isoKey,
  widget: 'object',
  fields: langaugeInstance(false),
});

const removeEnglish = ({ isoKey }) => isoKey !== 'eng';
const translations = () => languages.filter(removeEnglish).map(buildTranslation);

const createResource = () => ({
  name: 'resources',
  label: '📚 Resources',
  folder: 'src/data/saved/resources/',
  extension: 'json',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'resources',
    },
    ...langaugeInstance(true),
    ...translations(),
  ],
});

export default createResource;
