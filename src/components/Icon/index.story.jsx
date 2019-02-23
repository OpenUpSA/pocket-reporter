/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './index';


const basic = () => <Icon type="Public" />;


storiesOf('component.Icon', module)
  .add('Basic', basic);
