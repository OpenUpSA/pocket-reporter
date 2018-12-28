import React from 'react'
import styled from 'styled-components';

const questionData = [
  {
    question: 'Name/Title of the story.',
    hint: 'Write your answer here.'
  },
  {
    question: 'Who is the person or organisation filing the action? Names, ages, addresses, other personal information.',
    hint: 'Write your answer here.'
  },
  {
    question: 'Could this suit lead to a landmark action? Is it a precedent?',
    hint: 'Write your answer here.'
  },
  {
    question: 'Is there a possibility of an out-of-court settlement?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the significance of the action and the effect on others?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What are the names of the lawyers for both sides? (Check spelling!)',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the date and who is the presiding judge for the trial or hearing?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.'
  },
  {
    question: 'What is the background of the plaintiff or petitioner: the person filing the action?',
    hint: 'Write your answer here.'
  },
];

const QuestionWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  overflow: scroll;
  height: 100vh;
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
  }
`;

const QuestionList = styled.ol`
  padding: 0 0 0 25px;
  margin: 10 0;
`;

const ListItem = styled.li`
  font-weight: bold;
`;

const Answer = styled.input`
  margin-left: -15px;
  width: 100%;
  background-color: #fafafa;
  border: none;
  height: 44px;
`;

const Questions = () => (
  <QuestionWrapper>
    <QuestionList>
      {questionData.map(questionItem => (
        <ListItem>
          {questionItem.question}
          <Answer placeholder={questionItem.hint} />
        </ListItem>
      ))}
    </QuestionList>
  </QuestionWrapper>
);

export default Questions;