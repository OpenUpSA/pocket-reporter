const { uniq } = require('lodash');


const calcTitle = ({ language, title, translatedTitles }) => {
  const translation = translatedTitles[language];

  if (translation) {
    return translation;
  }

  return title;
}


const parseFolders = ({ node, language }) => {
  const title = calcTitle({ 
    language: language, 
    title: node.frontmatter.title,
    translatedTitles: node.frontmatter.translated_title,
  });

  return {
    title,
    icon: node.frontmatter.icon,
    titles: uniq([
      ...node.frontmatter.storyPages,
      ...node.frontmatter.resourcesPages,
    ]),
  }
}


module.exports = parseFolders;
