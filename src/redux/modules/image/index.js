import { get, CancelToken, isCancel } from 'axios';


const SET_ACTIVE_REQUEST = 'image/SET_ACTIVE_REQUEST';
const SET_URL = 'image/SET_URL';


const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_REQUEST: return {
      ...state,
      activeRequest: action.payload,
    };

    case SET_URL: return {
      ...state,
      url: action.payload,
    };

    default: return state;
  }
};


const setUrl = url => ({
  type: SET_URL,
  payload: url,
});


const setActiveRequest = value => ({
  type: SET_ACTIVE_REQUEST,
  payload: value,
});


const cancelActiveRequest = () => (dispatch, getState) => {
  const { activeRequest } = getState();

  if (activeRequest) {
    activeRequest.cancel();
  }

  return dispatch(setActiveRequest(null));
};


const updateUrl = () => (dispatch) => {
  dispatch(cancelActiveRequest());
  const newRequest = CancelToken.source();
  const { cancel: cancelToken } = newRequest;
  dispatch(setActiveRequest(newRequest));

  return get('https://dog.ceo/api/breeds/image/random', { cancelToken })
    .then(({ message }) => {
      dispatch(setUrl(message));
      dispatch(setActiveRequest(null));
    })
    .catch((error) => {
      if (!isCancel(error)) {
        throw new Error(error);
      }
    });
};


export { setUrl, setActiveRequest, updateUrl };
export default reducer;
