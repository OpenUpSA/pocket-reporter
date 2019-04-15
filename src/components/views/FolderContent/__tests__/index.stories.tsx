import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import content from '../README.md';
import Default from './Default';

storiesOf('⚙️ components|views/FolderContent/', module).add(
  'README',
  (): JSX.Element => <Fragment />,
  {
    readme: { content },
  },
);

storiesOf('⚙️ components|views/FolderContent/tests', module).add(
  'Default',
  (): JSX.Element => <Default />,
);
