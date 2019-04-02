/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import generateId from 'uuid/v4';


import { randomLengthBlankArray, randomNumber } from '../../helpers/randomizer';
import ListOfStories from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    stories: randomLengthBlankArray(1, 20).map(() => ({
      id: generateId(),
      title: faker.commerce.productName(),
      type: faker.commerce.department(),
      created: faker.date.past(),
      progress: randomNumber(0, 100),
      progressBackground: 100,
      click: '#',
    })),
  };
};


const basic = () => <ListOfStories {...createProps()} isoKey="eng" />;


storiesOf('view.Stories', module)
  .add('Basic', basic);
