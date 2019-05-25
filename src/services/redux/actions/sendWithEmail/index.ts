import iterateOverSendableString from './iterateOverSendableString';
import { logAsSent } from '../../modules/stories';

const apiUrl = 'https://api.whatsapp.com/send';

/**
 * TODO: Add description
 */

function sendMail(subject, body) {
    const email = "your@email.address";
    const link = "mailto:" + email
         + "?cc=myCCaddress@example.com"
         + "&subject=" + subject
         + "&body=" + body
    ;

    window.open(link, "pr_email");
}

/**
 * TODO: Add description
 */
const sendWithEmail = id => (dispatch, getState) => {
  const { stories } = getState();
  const { answers: rawAnswers } = stories[id];

  const keys = Object.keys(rawAnswers);
  const answers = keys.map(key => {
    const { question: title, ...innerProps } = rawAnswers[key];
    return { title, ...innerProps };
  });

  const result = answers.reduce(iterateOverSendableString, '');
  const slug = stories[id].name;
  sendMail(slug, result);

  dispatch(logAsSent(id));
};

export default sendWithEmail;
