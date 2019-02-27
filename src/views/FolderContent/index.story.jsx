/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import FolderContent from './index';
import { names as iconNames } from '../../config/icons.json';
import { randomLengthBlankArray, randomNumber } from '../../helpers/randomizer';


const maxIndex = iconNames.length;


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  const icon = iconNames[randomNumber(0, maxIndex)];

  return {
    questions: randomLengthBlankArray(1, 10).map((value, index) => ({
      title: `${faker.commerce.department()} ${index}`,
      icon,
      click: () => console.log('Question fired!'),
    })),
    resources: randomLengthBlankArray(1, 5).map((value, index) => ({
      title: `${faker.commerce.department()} ${index}`,
      icon,
      click: () => console.log('Resource Fired'),
    })),
  };
};


const basic = () => <FolderContent {...createProps()} isoKey="eng" />;


storiesOf('view.FolderContent', module)
  .add('Basic', basic);
