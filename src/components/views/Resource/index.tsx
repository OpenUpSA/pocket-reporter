import React from 'react';

import Layout from '../../global/Layout';
import { ResourceWrapper, Content } from './styled';

const Resource = (props: Tprops): JSX.Element => {
  const { title, body, isoKey, parentUrl } = props;

  return (
    <Layout {...{ title, isoKey }} back={parentUrl}>
      <ResourceWrapper>
        <Content source={body} />
      </ResourceWrapper>
    </Layout>
  );
};

export default Resource;
