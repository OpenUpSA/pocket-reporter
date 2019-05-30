const iterateOverSendableString = (result, { title, answer }, index, { length }) => {
  const addition = `${index + 1}/${length}: ${title}: ${answer !== null ? answer : ''} '%0D%0A'`;

  return result.concat(addition);
};

const convertStoryToString = (stories, id) => {
  const { answers: rawAnswers } = stories[id];

  const keys = Object.keys(rawAnswers);
  const answers = keys.map(key => {
    const { question: title, ...innerProps } = rawAnswers[key];
    return { title, ...innerProps };
  });

  return answers.reduce(iterateOverSendableString, '');
};

export default convertStoryToString;
