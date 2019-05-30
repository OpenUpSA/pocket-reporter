import convertStoryToString from '../../../utilities/convertStoryToString';
import { logAsSent } from '../../modules/stories';

const apiUrl = 'https://api.whatsapp.com/send';

const createWhatsappUrl = text => apiUrl.concat(`?text=${encodeURIComponent(text)}`);

const sendWithWhatsApp = id => (dispatch, getState) => {
  const { stories } = getState();
  const body = convertStoryToString(stories, id);
  const subject = stories[id].name;

  window.open(createWhatsappUrl(`${subject}%0D%0A${body}`));
  dispatch(logAsSent(id));
};

export default sendWithWhatsApp;
