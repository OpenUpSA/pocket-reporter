/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import Resource from './index';
import { randomLengthBlankArray } from '../../helpers/randomizer';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    title: faker.commerce.department(),
    body: `<p><strong>${faker.lorem.sentence()}</strong></p><p><em>${faker.lorem.sentences()}</em></p>${randomLengthBlankArray(0, 5).map(() => `<p>${faker.lorem.paragraphs()}</p>`).join('')}`,
  };
};


const basic = () => <Resource {...createProps()} backClick="#" isoKey="eng" />;


storiesOf('view.Resource', module)
  .add('Basic', basic);
