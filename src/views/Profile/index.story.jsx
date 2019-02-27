/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import Profile from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    title: faker.commerce.department(),
  };
};


const basic = () => <Profile {...createProps()} isoKey="eng" changeCallback={console.log} />;


storiesOf('view.Profile', module)
  .add('Basic', basic);
