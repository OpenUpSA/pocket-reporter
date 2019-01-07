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
  const getLanguageSpecificUrl = newLanguage => `${param(newLanguage)}/folders/index.html`;

  languages.forEach((language) => {
    const data = edges.map(({ node }) => parseData({ node, language }));

    createPage({
      path: getLanguageSpecificUrl(language),
      component: resolve('./src/templates/listOfFolders/index.jsx'),
      context: {
        language,
        foldersArray: data,
        getLanguageSpecificUrl,
      }
    });
  });
};


const createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(query).then(buildPages({ reject, createPage }))
    );
  })
};


module.exports = createPages;