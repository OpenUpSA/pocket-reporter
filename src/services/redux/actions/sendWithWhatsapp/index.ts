import iterateOverSendableString from './iterateOverSendableString';
import { logAsSent } from '../../modules/stories';

const apiUrl = 'https://api.whatsapp.com/send';

/**
 * TODO: Add description
 */
const createWhatsappUrl = text => apiUrl.concat(`?text=${encodeURIComponent(text)}`);

/**
 * TODO: Add description
 */
const sendWithWhatsApp = id => (dispatch, getState) => {
  const { stories } = getState();
  const { answers: rawAnswers } = stories[id];

  const keys = Object.keys(rawAnswers);
  const answers = keys.map(key => {
    const { question: title, ...innerProps } = rawAnswers[key];
    return { title, ...innerProps };
  });

  const result = answers.reduce(iterateOverSendableString, '');

  window.open(createWhatsappUrl(result));
  dispatch(logAsSent(id));
};

export default sendWithWhatsApp;
