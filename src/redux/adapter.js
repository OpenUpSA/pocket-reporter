import uuid from 'uuid/v4';
import { topics } from '../data/topics.json';

const LOCALSTORAGE_PROP = 'PocketReporter';
const NEW_LOCALSTORAGE_PROP = '03_04_2019';

const checkIfPropExistsInLocalStorage = prop => localStorage.getItem(prop) !== null;
const getPropFromLocalStorage = prop => JSON.parse(localStorage.getItem(prop));
const addPropToLocalStorage = (prop, data) => localStorage.setItem(prop, data);

const convertLanguageCodesToCorrectCodes = (locale) => {
  switch (locale) {
    case 'en-za': return 'eng';
    case 'af': return 'afr';
    case 'es': return 'spa';
    case 'xh': return 'xho';
    case 'nso': return 'nso';
    case 'pt': return 'por';
    case 'st': return 'sot';
    case 'tn': return 'tsn';
    case 'ZU': return 'zul';
    default: return null;
  }
};

const convertOldSchemaInfoToNewSchemaInfo = ({ locale }) => ({
  lastAction: null,
  language: convertLanguageCodesToCorrectCodes(locale),
});

const createAnswerObject = id => ({ key, notes = null }) => {
  const [{ questions, name }] = topics.filter(({ id: topicId }) => topicId == id);
  const [{ question }] = questions.filter(({ key: questionKey }) => questionKey == key);

  return {
    question,
    description: name,
    answer: notes,
    edits: 0,
    firstAnswered: null,
    lastEdit: null,
  };
};

const convertOldSchemaStoriesToNewSchemaStories = ({ stories }) => stories.reduce((
  result,
  {
    created_at,
    updated_at,
    answers,
    id,
    title: name,
  },
) => ({
  ...result,
  [uuid()]: {
    name,
    started: created_at,
    lastEdit: updated_at,
    answers: answers.map(createAnswerObject(id)),
  },
}), {});

const convertOldSchemaToNewSchema = oldStore => ({
  info: convertOldSchemaInfoToNewSchemaInfo(oldStore),
  stories: convertOldSchemaStoriesToNewSchemaStories(oldStore),
});

const main = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!checkIfPropExistsInLocalStorage(LOCALSTORAGE_PROP)) {
    return null;
  }

  const newStore = convertOldSchemaToNewSchema(getPropFromLocalStorage(LOCALSTORAGE_PROP));
  addPropToLocalStorage(NEW_LOCALSTORAGE_PROP, JSON.stringify(newStore));
  return newStore;
};

export default main;
