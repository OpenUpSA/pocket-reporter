/* eslint-disable @typescript-eslint/camelcase */

/**
 * Import third-party utility functions that will be used to transform data
 */
import uuid from 'uuid/v4';

/**
 * Import all content in state it was when legacy schema was replaced
 */
import afr from './data/af.json';
import eng from './data/en-za.json';
import spa from './data/es.json';
import nso from './data/nso.json';
import por from './data/pt.json';
import sot from './data/st.json';
import tsn from './data/tn.json';
import xho from './data/xh.json';
import zul from './data/ZU.json';

/**
 * Combine all legacy data into a single object.
 */
const oldDataObject = {
  af: afr,
  'en-za': eng,
  es: spa,
  nso,
  pt: por,
  st: sot,
  tn: tsn,
  xh: xho,
  ZU: zul,
};

/**
 * TODO: Describe.
 */
const findQuestion = (oldIsoKey, id, key) => {
  const question = oldDataObject[oldIsoKey][id].questions[key];
  const getFallback = () => oldDataObject['en-za'][id].questions[key];
  return question || getFallback() || null;
};

/**
 * :TODO: Describe.
 */
const createAnswerObject = (answers, oldIsoKey, id) => {
  const result = answers.reduce(
    (innerResult, { key, notes }) => ({
      ...innerResult,
      [key]: {
        question: findQuestion(oldIsoKey, id, key),
        answer: notes || null,
        edits: 0,
        firstAnswered: null,
        lastEdit: null,
      },
    }),
    {},
  );

  return result;
};

const convertToNewAnswers = (stories, oldIsoKey) =>
  stories.reduce((result, { created_at, updated_at, answers, topic, title: name }) => {
    const id = parseInt(topic, 10);
    const { name: template } = oldDataObject[oldIsoKey][id];

    return {
      ...result,
      [uuid()]: {
        name,
        template,
        started: created_at,
        lastEdit: updated_at,
        sent: 0,
        answers: createAnswerObject(answers, oldIsoKey, id),
      },
    };
  }, {});

export default convertToNewAnswers;
