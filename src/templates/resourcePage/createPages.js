const { resolve } = require('path');
const parseData = require('./parseData');
const { param } = require('change-case');

const query = require('./query');


const buildPages = ({ reject, createPage }) => ({ data: rawData, errors }) => {
  if (errors) {
    reject(errors)
  }

  const { edges } = rawData.allMarkdownRemark;
  const getUrl = title => (language) => {
    return `${param(language)}/resources/${param(title)}/index.html`;
  }

  edges.forEach(({ node }) => {
    const data = parseData({ node });
    const { title, language } = data;
    const getLanguageSpecificUrl = getUrl(title);

    createPage({
      path: getLanguageSpecificUrl(language),
      component: resolve('./src/templates/resourcePage/index.jsx'),
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