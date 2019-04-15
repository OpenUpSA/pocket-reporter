/* eslint-disable no-console  */

import React from 'react';
import Story from '../index';

const mockProps = {
  id: 123,
  title: 'Hello World!',
  navigate: console.log,
  onSendAction: id => console.log('send 1', id),
  onDeleteAction: id => console.log('delete 2', id),
  updateAnswer: (id, key, answer) => console.log(id, key, answer),
  answers: [
    {
      title: 'Hello',
      description: 'Lorem impsum',
      answers: null,
    },
    {
      title: 'World',
      answers: null,
    },
  ],
};

const Default = (): JSX.Element => <Story {...mockProps} />;

export default Default;
