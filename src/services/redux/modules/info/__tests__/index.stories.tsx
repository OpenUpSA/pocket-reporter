/**
 * Imports everything needed to render output of tests in Storybook.
 */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import content from '../README.md';

/**
 * Imports tests themselves.
 */
import SetLanguage from './SetLanguage';
/**
 * Register overview/documentation
 */
storiesOf('📡 redux|modules/info', module).add('README', (): JSX.Element => <Fragment />, {
  readme: { content },
});

/**
 * Register actual tests
 */
storiesOf('📡 redux|modules/info/tests', module).add(
  'Create blank store',
  (): JSX.Element => <SetLanguage />,
);
