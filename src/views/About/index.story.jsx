/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import { randomLengthBlankArray, arrayOfNumbers } from '../../helpers/arrayHelpers';
import About from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    tagline: faker.lorem.sentences(),
    html: faker.lorem.paragraphs(),
    contributors: randomLengthBlankArray(0, 15).map(() => ({
      link: '#',
      name: faker.name.findName(),
    })),
    partners: randomLengthBlankArray(0, 15).map(() => ({
      link: '#',
      name: faker.company.companyName(),
      logo: faker.image.image(...arrayOfNumbers(100, 600, 2)),
    })),
  };
};


const basic = () => <About {...createProps()} />;
const noValues = () => <About />;


storiesOf('views.About', module)
  .add('Basic', basic)
  .add('No Values', noValues);
