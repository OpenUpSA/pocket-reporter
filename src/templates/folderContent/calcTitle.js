const calcTitle = ({ language, title, translatedTitles }) => {
  const translation = translatedTitles[language];

  if (translation) {
    return translation;
  }

  return title;
}


module.exports = calcTitle;