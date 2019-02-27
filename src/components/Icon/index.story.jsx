/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './index';
import { names as iconNames } from '../../config/icons.json';


const basic = () => <Icon type="Public" />;
const all = () => (
  <div>
    {iconNames.map(type => <Icon {...{ type }} key={type} />)}
  </div>
);

storiesOf('component.Icon', module)
  .add('Single', basic)
  .add('All', all);
