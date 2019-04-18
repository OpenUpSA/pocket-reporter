import { languages } from './languages';

const langaugeInstance = (required = true) => [
  {
    name: 'title',
    label: 'Title',
    widget: 'string',
    required,
  },
  {
    name: 'questions',
    label: 'Questions',
    widget: 'list',
    fields: [
      {
        name: 'question',
        label: 'Question',
        widget: 'string',
        required,
      },
      {
        name: 'description',
        label: 'Description',
        widget: 'markdown',
        required: false,
      },
    ],
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

const createQuestions = () => ({
  name: 'questions',
  label: '✏️ Questions',
  folder: 'src/data/saved/questions/',
  extension: 'json',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'questions',
    },
    ...langaugeInstance(true),
    ...translations(),
  ],
});

export default createQuestions;
