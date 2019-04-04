import { omit } from 'lodash';

const ADD = 'stories/ADD';
const REMOVE = 'stories/REMOVE';
const UPDATE = 'stories/UPDATE';

const createAnswersObject = (results, question, index) => ({
  ...results,
  [index]: {
    answer: null,
    description: null,
    edits: 0,
    firstAnswered: null,
    lastEdit: null,
    question,
  },
});

const getTimestamp = new Date().getTime();

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD: return {
      ...state,
      [action.payload.id]: {
        answers: action.payload.questions.reduce(createAnswersObject, {}),
        lastEdit: null,
        name: action.payload.name,
        started: getTimestamp(),
      },
    };

    case UPDATE: return {
      ...state,
      [action.payload.id]: {
        ...state.stories[action.payload.id],
        answers: {
          ...state.stories[action.payload.id].answers,
          [action.payload.questionkey]: action.payload.answer,
        },
        lastEdit: getTimestamp(),
      },
    };

    case REMOVE: return omit(state, action.payload.id);

    default: return state;
  }
};

const update = (id, questionkey, answer) => ({
  type: UPDATE,
  payload: {
    id,
    questionkey,
    answer,
  },
});

const add = (id, name, questions) => {
  const timestamp = new Date().getTime();

  return {
    type: ADD,
    payload: {
      id,
      timestamp,
      questions,
      name,
    },
  };
};


const remove = id => ({
  type: ADD,
  payload: {
    id,
  },
});


export { add, remove, update };
export default reducer;
