const query = `{
  allMarkdownRemark(
		filter: {
      frontmatter: {
        type: {
          eq: "questions"
        } 
      }
    }
  ) {
    edges {
      node {
        frontmatter {
          title
          language
          questions {
            question
            description
            formatOfAnswer
          }
        }
      }
    }
  }
}`;


module.exports = query;