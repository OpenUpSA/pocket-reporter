const SET_LANGUAGE = 'user/SET_LANGUAGE';


const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_LANGUAGE: return {
      ...state,
      language: action.payload,
    };

    default: return state;
  }
};


const setLanguage = language => ({
  type: SET_LANGUAGE,
  payload: language,
});


export { setLanguage };
export default reducer;
