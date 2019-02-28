/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import generateId from 'uuid/v4';

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
      id: generateId(),
      title: `${faker.commerce.department()} ${index}`,
      icon,
    })),
    resources: randomLengthBlankArray(1, 5).map((value, index) => ({
      id: generateId(),
      title: `${faker.commerce.department()} ${index}`,
      icon,
      click: '#',
    })),
  };
};


const basic = () => <FolderContent {...createProps()} isoKey="eng" />;


storiesOf('view.FolderContent', module)
  .add('Basic', basic);
