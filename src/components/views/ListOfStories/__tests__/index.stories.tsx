import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import content from '../README.md';
import Default from './Default';
import Loading from './Loading';

storiesOf('⚙️ components|views/ListOfStories/', module).add(
  'README',
  (): JSX.Element => <Fragment />,
  {
    readme: { content },
  },
);

storiesOf('⚙️ components|views/ListOfStories/tests', module)
  .add('Default', (): JSX.Element => <Default />)
  .add('Loading', (): JSX.Element => <Loading />);
