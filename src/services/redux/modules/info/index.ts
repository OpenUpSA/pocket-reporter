/**
 * Register action types for this module.
 */
const SET_LANGUAGE = 'info/SET_LANGUAGE';

/**
 * TODO: Add description
 */
// @ts-ignore
const reducer = (state = {}, { type, payload } = {}) => {
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: payload.language,
      };

    default:
      return state;
  }
};

/**
 * TODO: Add description
 */
const setLanguage = language => ({
  type: SET_LANGUAGE,
  payload: {
    language,
  },
});

export { setLanguage };
export default reducer;
