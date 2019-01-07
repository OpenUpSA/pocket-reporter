const { param } = require('change-case');


const parseData = ({ node }) => {
  const language = node.frontmatter.language;
  const title = node.frontmatter.title;

  return {
    language,
    title,
    icon: node.frontmatter.icon,
    url: `${param(language)}/folders/${param(title)}/index.html`
  }
}


module.exports = parseData;
