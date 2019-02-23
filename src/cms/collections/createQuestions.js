import { isoToLanguage } from '../../helpers/languageConversions';

const langaugeInstance = (required = true) => [
  {
    name: 'questions_title',
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

const createQuestions = isoKeys => ({
  name: 'questions',
  identifier_field: 'question_title',
  label: '✏️ Questions',
  folder: 'src/data/questions/',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'questions',
    },
    ...langaugeInstance(true),
    ...translations(isoKeys),
  ],
});

export default createQuestions;
