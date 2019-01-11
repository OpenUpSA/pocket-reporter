const parseData = ({ node }) => {
  const language = node.frontmatter.language;
  const title = node.frontmatter.title;
  const questions = node.frontmatter.questions;

  return {
    language,
    title,
    questions
  }
}


module.exports = parseData;