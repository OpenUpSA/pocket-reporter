/* eslint-disable import/no-extraneous-dependencies */


const createAllItems = require('./createAllItems');
const extractFileArray = require('./extractFileArray');


const createPagesArray = (response) => {
  const itemsArray = createAllItems(response);

  const result = [
    ...extractFileArray(itemsArray, 'folder', './src/templates/folders.js'),
    ...extractFileArray(itemsArray, 'resource', './src/templates/resource.js'),
    ...extractFileArray(itemsArray, 'content', './src/templates/content.js'),
  ];

  return result;
};


module.exports = createPagesArray;
