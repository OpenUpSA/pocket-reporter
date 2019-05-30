import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import gettingStarted from './getting-started.md';

storiesOf('documentation|overview', module).add(
  'Getting Started',
  (): JSX.Element => <Fragment />,
  {
    readme: { content: gettingStarted },
  },
);
