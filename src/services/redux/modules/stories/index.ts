/**
 * Import third-party tooling.
 */
import { omit } from 'lodash';

/**
 * Import TypeScript static types
 */
import { Tstory } from '../../schema';

/**
 * Imports custom utilities.
 */
import getTimestamp from './getTimeStamp';
import createAnswersObject from './createAnswersObject';

/**
 * Register action types for this module.
 */
const ADD = 'stories/ADD';
const REMOVE = 'stories/REMOVE';
const UPDATE = 'stories/UPDATE';
const LOG_SENT = 'stories/LOG_SENT';

interface Tstories {
  [key: string]: Tstory;
}

/**
 * TODO: Add description
 */
// @ts-ignore
const reducer = (state: Tstories = {}, { type, payload } = {}) => {
  switch (type) {
    case LOG_SENT:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          sent: state[payload.id].sent + 1,
        },
      };

    case ADD:
      return {
        ...state,
        [payload.id]: {
          answers: payload.questions.reduce(createAnswersObject, {}),
          lastEdit: null,
          sent: 0,
          template: payload.template,
          name: payload.name,
          started: getTimestamp(),
        },
      };

    case UPDATE:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          answers: {
            ...state[payload.id].answers,
            [payload.questionkey]: {
              ...state[payload.id].answers[payload.questionkey],
              answer: payload.answer,
            },
          },
          lastEdit: getTimestamp(),
        },
      };

    case REMOVE:
      return omit(state, payload.id);

    default:
      return state;
  }
};

/**
 * TODO: Add description
 */
const add = (id, name, questions, template) => {
  return {
    type: ADD,
    payload: {
      id,
      questions,
      name,
      template,
    },
  };
};

/**
 * TODO: Add description
 */
const logAsSent = id => ({
  type: LOG_SENT,
  payload: {
    id,
  },
});

/**
 * TODO: Add description
 */
const update = (id, questionkey, answer) => ({
  type: UPDATE,
  payload: {
    id,
    questionkey,
    answer,
  },
});

/**
 * TODO: Add description
 */
const remove = id => ({
  type: REMOVE,
  payload: {
    id,
  },
});

export { add, remove, update, logAsSent };
export default reducer;
