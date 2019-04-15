const createQuestions = isoKey => object => {
  if (!object || !object.content) {
    return null;
  }

  const { title, questions } = object.content;

  if (isoKey === 'eng') {
    return {
      type: 'question',
      fallback: false,
      isoKey,
      title,
      questions,
    };
  }

  if (!object[isoKey] || !object[isoKey].title || /^\s+$/.test(object[isoKey].title)) {
    return {
      type: 'question',
      fallback: true,
      isoKey,
      title,
      questions,
    };
  }

  return {
    type: 'question',
    fallback: false,
    isoKey,
    title: object[isoKey].title,
    questions: object[isoKey].questions.filter(notNull => !!notNull),
  };
};

export default createQuestions;
