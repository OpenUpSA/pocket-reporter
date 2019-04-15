/**
 * Imports everything needed to render output of tests in Storybook.
 */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import content from '../README.md';

/**
 * Imports tests themselves.
 */
import BlankStore from './BlankStore';
import TransformOldStore from './TransformOldStore';

/**
 * Register overview/documentation
 */
storiesOf('🔨 services|redux/createStore', module).add('README', (): JSX.Element => <Fragment />, {
  readme: { content },
});

/**
 * Register actual tests
 */
storiesOf('🔨 services|redux/createStore/tests', module)
  .add('Create blank store', (): JSX.Element => <BlankStore />)
  .add('Transform old store', (): JSX.Element => <TransformOldStore />);
