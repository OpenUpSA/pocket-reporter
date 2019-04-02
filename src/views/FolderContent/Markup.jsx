import React, { Fragment } from 'react';
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


const createWrapper = (title, values, callback) => (
  <Fragment>
    <Heading component="h3">{title}</Heading>
    <Wrapper>
      {!!values && !!values[0] && values.map(callback)}
    </Wrapper>
  </Fragment>
);


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
      {!!questions && !!questions[0] && createWrapper('Story Templates', questions, createQuestionCard)}
      {!!resources && !!resources[0] && createWrapper('Additional Resources', resources, createResourceCard)}
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
