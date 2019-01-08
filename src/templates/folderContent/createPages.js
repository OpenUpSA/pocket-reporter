const { resolve } = require('path');
const parseData = require('./parseData');
const { param, snake } = require('change-case');
const indent = require('indent-string');

const languages = require('../../config/languages.json');
const createInitialQuery = require('./createInitialQuery');


const languagesQuery = languages
  .filter(language => language !== 'English')
  .map(language => snake(language))
  .join(indent('\n', 6));


const query = createInitialQuery(languagesQuery);


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
        }
      })
    });
  });
}


const createPages = ({ graphql, actions }) => new Promise((resolve, reject) => {
const { createPage } = actions
  const result = graphql(query).then(buildPages({ reject, createPage }));
  resolve(result);
});


module.exports = createPages;