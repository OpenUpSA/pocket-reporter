import React from 'react';
import t from 'prop-types';


import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import { ResourceWrapper } from './styled';


const Resource = (props) => {
  const {
    title,
    body: __html,
    backClick,
    isoKey,
  } = props;

  return (
    <Layout {...{ title, isoKey }} back={backClick}>
      <ResourceWrapper>
        <ResourceWrapper dangerouslySetInnerHTML={{ __html }} />
      </ResourceWrapper>
    </Layout>
  );
};


export default Resource;


Resource.propTypes = {
  title: t.string.isRequired,
  body: t.string.isRequired,
};
