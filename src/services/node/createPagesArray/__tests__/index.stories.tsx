/**
 * Imports everything needed to render output of tests in Storybook.
 */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import content from '../README.md';

/**
 * Imports tests themselves
 */
import Default from './Default';

/**
 * Register overview/documentation
 */
storiesOf('🔨 services|node/createPagesArray', module).add(
  'README',
  (): JSX.Element => <Fragment />,
  {
    readme: { content },
  },
);

/**
 * Register actual tests
 */
storiesOf('🔨 services|node/createPagesArray/tests', module).add(
  'test 1',
  (): JSX.Element => <Default />,
);
