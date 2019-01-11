import React, { Fragment } from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Button from '@material-ui/core/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const questionData = [
  {
    question: 'Name/Title of the story.',
    hint: 'Write your answer here.',
    id: 0,
  },
  {
    question: 'Who is the person or organisation filing the action? Names, ages, addresses, other personal information.',
    hint: 'Write your answer here.',
    id: 1,
  },
  {
    question: 'Could this suit lead to a landmark action? Is it a precedent?',
    hint: 'Write your answer here.',
    id: 2,
  },
  {
    question: 'Is there a possibility of an out-of-court settlement?',
    hint: 'Write your answer here.',
    id: 3,
  },
  {
    question: 'What is the significance of the action and the effect on others?',
    hint: 'Write your answer here.',
    id: 4,
  },
  {
    question: 'What are the names of the lawyers for both sides? (Check spelling!)',
    hint: 'Write your answer here.',
    id: 5,
  },
  {
    question: 'What is the date and who is the presiding judge for the trial or hearing?',
    hint: 'Write your answer here.',
    id: 6,
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.',
    id: 7,
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.',
    id: 8,
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.',
    id: 9,
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.',
    id: 10,
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.',
    id: 11,
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.',
    id: 12,
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.',
    id: 13,
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.',
    id: 14,
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.',
    id: 15,
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.',
    id: 16,
  },
];

const QuestionWrapper = styled.div`
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  overflow: scroll;
  height: 90vh;
  position: relative;
  top: 60px;
  padding: 0px 15px;
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
    padding: 0px;
  }
`;

const QuestionList = styled.ol`
  padding: 0 0 0 25px;
  margin: 10px 0;
`;

const ListItem = styled.li`
  font-weight: bold;
  margin-bottom: 20px;
`;

const Answer = styled.input`
  margin-left: -15px;
  width: 100%;
  background-color: #fafafa;
  border: none;
  height: 44px;
`;

const QuestionNotice = styled.div`
  background-color: #e2e3e5;
  margin: 0px 10px 10px 10px;
  padding: 20px;
  border-radius: 4px;
`;

const QuestionActions = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StoryTemplate = () => (
  <Fragment>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>

    <Header story />

    <QuestionWrapper>
      <QuestionList>
        {questionData.map(questionItem => (
          <ListItem key={questionItem.id}>
            {questionItem.question}
            <Answer placeholder={questionItem.hint} />
          </ListItem>
        ))}
      </QuestionList>
      <QuestionNotice>
        <p style={{margin: 0}}>If email submission does not work please change to the latest version of Chrome</p>
      </QuestionNotice>
      <QuestionActions>
        <Button>
          Email Story
        </Button>
        {/*TODO: Correct colour for button*/}
        <Button variant="contained" color="primary">
          Send Story and media via whatsapp
        </Button>
        <Button color="secondary">
          Delete story
        </Button>
      </QuestionActions>
    </QuestionWrapper>

    <Footer />
  </Fragment>
);

export default StoryTemplate;