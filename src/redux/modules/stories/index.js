import { omit } from 'lodash';
import generateUniqueId from 'uuid/v4';

const ADD = 'stories/ADD';
const REMOVE = 'storues/REMOVE';


const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD: return {
      ...state,
      [action.payload.id]: action.payload.storyObject,
    };

    case REMOVE: return omit(state, action.payload.id);

    default: return state;
  }
};


const add = (storyObject) => {
  const id = generateUniqueId();
  const timestamp = new Date().getTime();

  return {
    type: ADD,
    payload: {
      id,
      timestamp,
      storyObject,
    },
  };
};


const remove = id => ({
  type: ADD,
  payload: {
    id,
  },
});


export { add, remove };
export default reducer;
