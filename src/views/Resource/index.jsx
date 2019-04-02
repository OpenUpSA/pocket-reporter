import React from 'react';
import t from 'prop-types';

import Layout from '../../components/Layout';
import { ResourceWrapper, Content } from './styled';


const Resource = (props) => {
  const {
    title,
    body,
    isoKey,
    parentUrl,
  } = props;

  return (
    <Layout {...{ title, isoKey }} back={parentUrl}>
      <ResourceWrapper>
        <Content source={body} />
      </ResourceWrapper>
    </Layout>
  );
};


export default Resource;


Resource.propTypes = {
  title: t.string.isRequired,
  body: t.string.isRequired,
};
