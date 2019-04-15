/* eslint-disable import/no-extraneous-dependencies */

import createAllItems from './createAllItems';
import extractFileArray from './extractFileArray';
import { Tresponse, Tresult } from './schema';

const createPagesArray = (response: Tresponse): Tresult => {
  const itemsArray = createAllItems(response);

  const result = [
    ...extractFileArray(itemsArray, 'folder', './src/templates/folders.js'),
    ...extractFileArray(itemsArray, 'resource', './src/templates/resource.js'),
    ...extractFileArray(itemsArray, 'content', './src/templates/content.js'),
  ];

  return result;
};

export default createPagesArray;
