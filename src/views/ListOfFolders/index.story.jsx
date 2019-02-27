/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import ListOfFolders from './index';
import { names as iconNames } from '../../config/icons.json';
import { randomLengthBlankArray, randomNumber } from '../../helpers/randomizer';


const maxIndex = iconNames.length;


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    folders: randomLengthBlankArray(1, 20).map((value, index) => ({
      title: `${faker.commerce.department()} ${index}`,
      icon: iconNames[randomNumber(0, maxIndex - 1)],
      click: '#',
    })),
  };
};


const basic = () => <ListOfFolders {...createProps()} isoKey="eng" />;


storiesOf('view.ListOfFolders', module)
  .add('Basic', basic);
