/* eslint-disable import/no-extraneous-dependencies */

import { flatten } from 'lodash';

import { isoKeys } from '../../../../data/hardcoded/languages/schema';
import createNestedAll from './createNestedAll';

const createAllItems = response => {
  const foldersArray = response.data.allFoldersJson.edges.map(({ node }) => node);
  const nestedAllItems = createNestedAll(isoKeys, foldersArray);
  const result = flatten(flatten(nestedAllItems)).filter(value => !!value);

  return result;
};

export default createAllItems;
