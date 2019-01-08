const calcTitle = require('./calcTitle');
const { param } = require('change-case');


const addUrlToResource = ({ language, type }) => title => ({
  title,
  url: `/${param(language)}/${param(type)}/${param(title)}/index.html`,
})


const parseFolders = ({ node, language }) => {
  const title = calcTitle({ 
    language: language, 
    title: node.frontmatter.title,
    translatedTitles: node.frontmatter.translated_title,
  });

  return {
    title,
    language,
    icon: node.frontmatter.icon,
    questionPages: node.frontmatter.storyPages.map(
      addUrlToResource({ language, type: 'questions' })
    ),
    resourcePages: node.frontmatter.resourcesPages.map(
      addUrlToResource({ language, type: 'resources' })
    ),
  }
}


module.exports = parseFolders;
