/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import Card from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    title: faker.commerce.department(),
  };
};


const basic = () => <Card {...createProps()} icon="Public" click="#" />;
const resource = () => <Card {...createProps()} icon="Public" click="#" resource />;
const stacked = () => <Card {...createProps()} icon="Public" click="#" stacked />;


storiesOf('components.Card', module)
  .add('Basic', basic)
  .add('Resource', resource)
  .add('Stacked', stacked);
