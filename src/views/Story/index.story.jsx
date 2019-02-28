/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import { randomLengthBlankArray } from '../../helpers/randomizer';
import Story from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    questions: randomLengthBlankArray(1, 30).map((value, index) => ({
      title: `${faker.commerce.department()} ${index}`,
      description: faker.lorem.sentences(),
    })),
  };
};


const basic = () => (
  <Story
    {...createProps()}
    isoKey="eng"
    title={faker.company.catchPhrase()}
  />
);


storiesOf('view.Story', module)
  .add('Basic', basic);
