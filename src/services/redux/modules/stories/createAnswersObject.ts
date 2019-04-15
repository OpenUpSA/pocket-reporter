/**
 * TODO: Add description
 */
const createAnswersObject = (result, { question, description }, index) => ({
  ...result,
  [index]: {
    answer: null,
    description,
    edits: 0,
    firstAnswered: null,
    lastEdit: null,
    question,
    sent: 0,
  },
});

export default createAnswersObject;
