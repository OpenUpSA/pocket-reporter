const { resolve } = require('path');
const parseData = require('./parseData');
const { param, snakeCase } = require('change-case');
const indent = require('indent-string');

const languages = require('../../config/languages.json');


const languagesQuery = languages
  .filter(language => language !== 'English')
  .map(language => snakeCase(language))
  .join(indent('\n', 6));


const query = `{
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
          storyPages
          resourcesPages
        }
      }
    }
  }
}`;


const buildPages = ({ reject, createPage }) => ({ data: rawData, errors }) => {
  if (errors) {
    reject(errors)
  }

  const { edges } = rawData.allMarkdownRemark;
  const getUrl = title => (language) => {
    return `${param(language)}/folders/${param(title)}/index.html`;
  }


  edges.forEach(({ node }) => {
    languages.forEach((language) => {
      const data = parseData({ node, language });
      const { title } = data;
      const getLanguageSpecificUrl = getUrl(title);

      createPage({
        path: getLanguageSpecificUrl(language),
        component: resolve('./src/templates/folderContent/index.jsx'),
        context: {
          ...data,
          language,
          getLanguageSpecificUrl,
        },
      })
    });
  });
}


const createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(query).then(buildPages({ reject, createPage }))
    );
  })
};


module.exports = createPages;