/* eslint-disable import/no-extraneous-dependencies */

import deepmerge from 'deepmerge';

const convertItemsIntoPages = (dataSource, itemType, component) => {
  const selectedItems = dataSource.reduce((result, object) => {
    const key = Object.keys(object)[0];
    const { type } = object[key];

    if (type !== itemType) {
      return result;
    }

    return deepmerge(result, object);
  }, {});

  const paths = Object.keys(selectedItems);

  const result = paths.map(path => ({
    path,
    component,
    context: selectedItems[path],
  }));

  return result;
};

export default convertItemsIntoPages;
