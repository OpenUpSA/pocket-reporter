import React from 'react';
import styled from 'styled-components';
import t from 'prop-types';


import Layout from '../../components/Layout';
import Card from '../../components/Card';


const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 500px) {
    width: 50%;
  }

  @media screen and (min-width: 700px) {
    width: ${100 / 3}%;
  }
`;

const CardIteration = ({ title, icon }) => (
  <CardWrapper>
    <Card {...{ title, icon }} stacked />
  </CardWrapper>
);


const FolderContent = ({ folders = [] }) => (
  <Layout title="Start a new story">
    <Wrap>
      {folders.map(CardIteration)}
    </Wrap>
  </Layout>
);


export default FolderContent;


CardWrapper.propTypes = {
  title: t.string.isRequired,
  icon: t.string.isRequired,
};


FolderContent.propTypes = {
  folders: t.arrayOf(t.shape({
    title: t.string,
    icon: t.string,
  })).isRequired,
};
