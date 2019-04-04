const WHATSAPP_API_URL = 'https://api.whatsapp.com/send';

const createSendableString = (
  result,
  { question, answer },
  index,
  { length },
) => result.concat(`${index + 1}/${length}: ${question}: ${answer !== null ? answer : ''} --- `);

const createWhatsAppAPIURL = (phone, text) => `${WHATSAPP_API_URL}?text=${encodeURIComponent(text)}`;

const sendWithWhatsApp = id => (dispatch, getState) => {
  const newState = getState();
  const [{ answers }] = newState.stories[id];
  const createWhatsAppText = answers.reduce(createSendableString, '');

  window.open(createWhatsAppAPIURL(createWhatsAppText));
};

export default {
  sendWithWhatsApp,
};
