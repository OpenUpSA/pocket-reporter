import React, { Component, Fragment } from 'react'
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

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

class StoryTemplate extends Component {

  render() {
    const questions = this.props.questions;

    return (
      <Fragment>
        <QuestionWrapper>
          <QuestionList>
            {questions.map((questionItem, index) => (
              <ListItem key={index}>
                {questionItem.question}
                <Answer placeholder={questionItem.description}/>
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

      </Fragment>
    )
  }
};

export default StoryTemplate;