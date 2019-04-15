import React from 'react';

import Card from '../../global/Card';
import { Wrap, CardWrapper } from './styled';
import { Tprops } from './schema';
import Layout from '../../global/Layout';

const CardIteration = ({ click, ...otherProps }): JSX.Element => (
  <CardWrapper>
    <Card {...otherProps} onClickEvent={click} stacked />
  </CardWrapper>
);

const ListOfFolders = (props: Tprops): JSX.Element => {
  const { folders = [], isoKey } = props;

  return (
    <Layout title="Start a new story" {...{ isoKey }}>
      <Wrap>{folders.map(CardIteration)}</Wrap>
    </Layout>
  );
};

export default ListOfFolders;
