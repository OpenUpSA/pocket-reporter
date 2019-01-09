const { snake } = require('change-case');
const indent = require('indent-string');


const languagesQuery = languages => languages
  .filter(language => language !== 'English')
  .map(language => snake(language))
  .join(indent('\n', 6));


const createQuery = languages => `{
  allMarkdownRemark (
    filter: {
      frontmatter: {
        type: {
          eq: "pages"
        }
        page: {
          eq: "folders"
        }
      }
    }
  ) {
    edges {
      node {
        html
        frontmatter {
          title
          icon
          translated_title {
            ${languagesQuery(languages)}
          }
        }
      }
    }
  }
}`;


module.exports = createQuery;
