/**
 * TODO: Add description
 */
const iterateOverSendableString = (result, { title, answer }, index, { length }) => {
  const addition = `${index + 1}/${length}: ${title}: ${answer !== null ? answer : ''} --- `;
  return result.concat(addition);
};

export default iterateOverSendableString;
