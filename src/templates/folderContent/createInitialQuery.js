
const createInitialQuery = languagesQuery => `{
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
            ${languagesQuery}
          }
          language
          storyPages
          resourcesPages
        }
      }
    }
  }
}`;


module.exports = createInitialQuery;