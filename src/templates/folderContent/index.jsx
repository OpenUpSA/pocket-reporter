import React from 'react';
import { graphql  } from 'gatsby';

import FolderContentData from '../../views/FolderContentData';
import parseProps from './parseProps';


export default ({ pageContext, data }) => {
  const props = parseProps({ pageContext, data });
  return <FolderContentData {...props} />;
}

export const query = graphql`query GetUrls($titles: [String!]) {
  urls: allMarkdownRemark(
    filter: {
      frontmatter: {
        type: {
          eq: "pages"
        }
        page: {
          in: ["resources", "questions"]
        }
        title: {
          in: $titles
        }
      }
    }
  ) {
    edges {
      node {
        frontmatter {
          page
          title
          translations {
            afrikaans
            spanish
            xhosa
            northern_sotho
            portuguese
            southern_sotho
            tswana
            zulu
          }
        }
      }
    }
  }
}`;
