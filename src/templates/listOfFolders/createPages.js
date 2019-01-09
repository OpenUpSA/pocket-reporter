const { resolve } = require('path');
const parseData = require('./parseData');
const { param } = require('change-case');

const createQuery = require('./createQuery');
const languages = require('../../config/languages.json');


const query = createQuery(languages);


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