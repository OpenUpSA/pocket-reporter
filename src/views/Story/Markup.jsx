import React from 'react';
import t from 'prop-types';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import Modal from './Modal';
import addProps from '../../helpers/addProps';
import Layout from '../../components/Layout';
import {
  GreenButton,
  QuestionActions,
  ListItem,
  QuestionList,
  ButtonClick,
  Heading,
  Description,
} from './styled';


const Question = (props) => {
  const { 
    title,
    description,
    answer,
    index,
    answers,
  } = props;

  return (
    <ListItem>
      <Heading>{title}</Heading>
      <Description>{description}</Description>
      <TextField
        fullWidth
        multiline
        margin="normal"
        variant="outlined"
        value={answer}
      />
    </ListItem>
  );
};


const createButtons = (sendClick, deleteClick) => (
  <QuestionActions>
    <ButtonClick click={deleteClick}>
      <Button color="secondary">
        Delete story
      </Button>
    </ButtonClick>
    <ButtonClick click={sendClick}>
      <GreenButton variant="contained">
        Send via WhatsApp
      </GreenButton>
    </ButtonClick>
  </QuestionActions>
);


const Markup = (props) => {
  const {
    questions = [],
    answers = [],
    updateText,
    sendWhatsapp,
    deleteStory,
    title,
    isoKey,
    modal,
    toggleModal,
    deleteAction,
  } = props;


  const modalProps = {
    open: modal,
    closeAction: toggleModal,
    title,
    deleteAction,
  };


  return (
    <Layout {...{ title, isoKey }} back="#">
      <Modal {...modalProps} />
      <QuestionList>
        {questions.map(addProps(Question, { answers }, 'title'))}
      </QuestionList>
      {createButtons(toggleModal, toggleModal)}
    </Layout>
  );
};


export default Markup;


Markup.propTypes = {
  children: t.node,
};


Markup.defaultProps = {
  children: null,
};
