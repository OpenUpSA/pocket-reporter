/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import { randomLengthBlankArray } from '../../helpers/arrayHelpers';
import Folder from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    folders: randomLengthBlankArray(1, 20).map(() => ({
      title: faker.commerce.department(),
      icon: 'Public',
    })),
  };
};


const basic = () => <Folder {...createProps()} />;


storiesOf('view.Folder', module)
  .add('Basic', basic);
