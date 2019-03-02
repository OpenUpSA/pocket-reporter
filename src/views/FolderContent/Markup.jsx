import React from 'react';
import t from 'prop-types';


import Modal from './Modal';
import addProps from '../../helpers/addProps';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import { Wrapper, CardWrapper, Heading } from './styled';


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


const Markup = (props) => {
  const {
    isoKey,
    modalId,
    setModalId,
    link,
    questions,
    resources,
    icon,
    newTitle,
    createStory: createStoryFn,
  } = props;


  const createQuestionCard = addProps(CardIteration, { icon, link }, 'title');
  const createResourceCard = addProps(CardIteration, { icon, link, resource: true }, 'title');


  const modalProps = {
    newTitle,
    open: !!modalId,
    closeAction: () => setModalId(null),
    question: questions.find(({ id }) => id === modalId),
    createAction: () => createStoryFn(modalId),
  };


  return (
    <Layout title="Start a new story" back={`/${isoKey}/folders/index.html`} {...{ isoKey }}>
      <Modal {...modalProps} />
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


export default Markup;


Markup.propTypes = {
  isoKey: t.string.isRequired,
  modalId: t.string,
  setModalId: t.func.isRequired,
  link: t.node,
  questions: t.arrayOf(t.shape({
    id: t.string,
    title: t.string,
    icon: t.string,
    click: t.oneOfType([t.string, t.func]),
  })).isRequired,
  resources: t.arrayOf(t.shape({
    id: t.string,
    title: t.string,
    icon: t.string,
    click: t.oneOfType([t.string, t.func]),
  })).isRequired,
};


Markup.defaultProps = {
  link: null,
  modalId: null,
};


CardIteration.propTypes = {
  title: t.string.isRequired,
  icon: t.string.isRequired,
};