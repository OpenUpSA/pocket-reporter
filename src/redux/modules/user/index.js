const SET_AGE = 'user/SET_AGE';


export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_AGE: return {
      ...state,
      loggedIn: action.payload,
    };

    default: return state;
  }
}


export function setAge(age) {
  return {
    type: SET_AGE,
    payload: age,
  };
}
