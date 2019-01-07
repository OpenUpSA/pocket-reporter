const query = `{
  allMarkdownRemark (
    filter: {
      frontmatter: {
        type: {
          eq: "resources"
        }
      }
    }
  ) {
    edges {
      node {
        html
        frontmatter {
          title
          language
        }
      }
    }
  }
}`;


module.exports = query;