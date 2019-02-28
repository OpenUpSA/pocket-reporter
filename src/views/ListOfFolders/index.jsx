import React from 'react';
import t from 'prop-types';


import { Wrap, CardWrapper } from './styled';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import addProps from '../../helpers/addProps';


const CardIteration = (props) => {
  const {
    title,
    icon,
    link,
    click,
  } = props;

  const passedProps = {
    title,
    icon,
    link,
    click,
  };

  return (
    <CardWrapper>
      <Card {...passedProps} stacked />
    </CardWrapper>
  );
};


const ListOfFolders = (props) => {
  const {
    folders = [],
    link,
    isoKey,
  } = props;

  return (
    <Layout title="Start a new story" {...{ isoKey }} back="/">
      <Wrap>
        {folders.map(addProps(CardIteration, { link }, 'title'))}
      </Wrap>
    </Layout>
  );
};


export default ListOfFolders;


ListOfFolders.propTypes = {
  folders: t.arrayOf(t.shape({
    title: t.string,
    icon: t.string,
  })).isRequired,
  link: t.node,
};


ListOfFolders.defaultProps = {
  link: null,
};


CardIteration.propTypes = {
  title: t.string.isRequired,
  icon: t.string.isRequired,
  link: t.node,
};

CardIteration.defaultProps = {
  link: null,
};
