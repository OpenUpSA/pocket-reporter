import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import content from '../README.md';
import Default from './Default';

storiesOf('⚙️ components|views/Resource/', module).add('README', (): JSX.Element => <Fragment />, {
  readme: { content },
});

storiesOf('⚙️ components|views/Resource/tests', module).add(
  'Default',
  (): JSX.Element => <Default />,
);
