/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import Layout from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    title: faker.commerce.department(),
  };
};


const basic = () => <Layout {...createProps()} isoKey="eng">{faker.lorem.paragraphs()}</Layout>;
const withBack = () => <Layout {...createProps()} back="#" isoKey="eng">{faker.lorem.paragraphs()}</Layout>;


const noHeading = () => {
  const result = <Layout {...createProps()} header={false}>{faker.lorem.paragraphs()}</Layout>;
  return result;
};

const noFooter = () => {
  const result = <Layout {...createProps()} footer={false} isoKey="eng">{faker.lorem.paragraphs()}</Layout>;
  return result;
};

storiesOf('components.Layout', module)
  .add('Basic', basic)
  .add('With Back', withBack)
  .add('No Heading', noHeading)
  .add('No Footer', noFooter);
