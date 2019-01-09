const { param } = require('change-case');


const parseData = ({ node }) => {
  const language = node.frontmatter.language;
  const title = node.frontmatter.title;
  const html = node.html;

  return {
    language,
    title,
    html,
  }
}


module.exports = parseData;
