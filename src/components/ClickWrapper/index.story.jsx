/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';


import ClickWrapper from './index';


const callback = () => <ClickWrapper click={() => console.log('fired')}>Click Me!</ClickWrapper>;
const external = () => <ClickWrapper click="#">Click Me!</ClickWrapper>;
const internal = () => <ClickWrapper click="#" link="a">Click Me!</ClickWrapper>;

storiesOf('component.ClickWrapper', module)
  .add('Callback', callback)
  .add('External', external)
  .add('Internal', internal);
