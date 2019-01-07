const calcTitle = require('./calcTitle');
const { param } = require('change-case');


const parseFolders = ({ node, language }) => {
  const title = calcTitle({ 
    language, 
    title: node.frontmatter.title,
    translatedTitles: node.frontmatter.translated_title,
  });

  return {
    title,
    icon: node.frontmatter.icon,
    url: `${param(language)}/folders/${param(title)}/index.html`
  }
}


module.exports = parseFolders;
