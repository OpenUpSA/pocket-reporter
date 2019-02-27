/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import SplashScreen from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    title: faker.commerce.department(),
  };
};


const basic = () => <SplashScreen {...createProps()} changeCallback={console.log} />;


storiesOf('view.SplashScreen', module)
  .add('Basic', basic);
