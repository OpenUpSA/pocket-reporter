import { topics } from '../data/topics.json';
import uuid from 'uuid/v4';

const LOCALSTORAGE_PROP = 'PocketReporter';

const checkIfPropExistsInLocalStorage = prop => localStorage.getItem(prop) !== null;
const getPropFromLocalStorage = prop => JSON.parse(localStorage.getItem(prop));
const addPropToLocalStorage = (prop, data) => localStorage.setItem(prop, data);

const convertOldSchemaInfoToNewSchemaInfo = ({ locale }) => ({
  lastAction: 12345678,
  language: locale,
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

const convertOldSchemaStoriesToNewSchemaStories = ({ stories }) => {
  return stories.map(({ created_at, updated_at, answers, id }) => ({
    started: created_at,
    lastEdit: updated_at,
    answers: answers.map(createAnswerObject(id)),
  })).reduce((result,current) => ({
    ...result,
    [uuid()]: current,
  }), {});
};

const convertOldSchemaToNewSchema = oldStore => ({
  info: convertOldSchemaInfoToNewSchemaInfo(oldStore),
  stories: convertOldSchemaStoriesToNewSchemaStories(oldStore),
});

const main = () => {
  if (checkIfPropExistsInLocalStorage(LOCALSTORAGE_PROP)) {
    console.log(convertOldSchemaToNewSchema(getPropFromLocalStorage(LOCALSTORAGE_PROP)));
  }
};

export default main();
