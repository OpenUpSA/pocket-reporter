import convertStoryToString from '../../../utilities/convertStoryToString';
import { logAsSent } from '../../modules/stories';

/**
 * TODO: Add description
 */

const sendMail = ({
  email = 'your@email.address',
  subject = 'Pocket Reporter Story',
  body = '',
}) => {
  const link = `mailto:${email}?subject=${subject}&body=${body}`;
  window.open(link, 'pr_email');
};

/**
 * TODO: Add description
 */
const sendWithEmail = id => (dispatch, getState) => {
  const { stories } = getState();
  const body = convertStoryToString(stories, id);

  const subject = stories[id].name;
  sendMail({ subject, body });
  dispatch(logAsSent(id));
};

export default sendWithEmail;
