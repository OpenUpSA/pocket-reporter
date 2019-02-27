import React from 'react';
import t from 'prop-types';


import { Wrapper, CardWrapper } from './styled';
import Heading from '../../components/Heading';
import addProps from '../../helpers/addProps';
import Layout from '../../components/Layout';
import Card from '../../components/Card';


const CardIteration = (props) => {
  const {
    resource,
    link,
    title,
    icon,
    click,
  } = props;

  const passedProps = {
    resource,
    link,
    title,
    icon,
    click,
  };

  return (
    <CardWrapper>
      <Card {...passedProps} />
    </CardWrapper>
  );
};


const ListOfFolders = (props) => {
  const {
    questions,
    resources,
    link,
    isoKey,
  } = props;

  const createQuestionCard = addProps(CardIteration, { link }, 'title');
  const createResourceCard = addProps(CardIteration, { link, resource: true }, 'title');

  return (
    <Layout title="Start a new story" {...{ isoKey }}>
      <Heading component="h3">Story Templates</Heading>
      <Wrapper>
        {questions.map(createQuestionCard)}
      </Wrapper>
      <Heading component="h3">Additional Resources</Heading>
      <Wrapper>
        {resources.map(createResourceCard)}
      </Wrapper>
    </Layout>
  );
};


export default ListOfFolders;


CardIteration.propTypes = {
  title: t.string.isRequired,
  icon: t.string.isRequired,
};


ListOfFolders.propTypes = {
  link: t.node,
  questions: t.arrayOf(t.shape({
    title: t.string,
    icon: t.string,
    click: t.oneOfType([t.string, t.func]),
  })).isRequired,
  resources: t.arrayOf(t.shape({
    title: t.string,
    icon: t.string,
    click: t.oneOfType([t.string, t.func]),
  })).isRequired,
};


ListOfFolders.defaultProps = {
  link: null,
};
