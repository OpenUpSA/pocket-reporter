import React, { Component } from 'react';
import t from 'prop-types';


import Markup from './Markup';


const createEmptyStringArray = length => Array(length).fill('');


class Story extends Component {
  constructor(props) {
    super(props);

    const { questions, answers } = this.props;

    this.state = {
      modal: false,
      answers: answers || createEmptyStringArray(questions.length),
    };
  }

  updateAnswer = answers => this.setState({ answers });

  sendWhatsApp = () => console.log('Hello!');

  deleteStory = () => console.log('Hello!');

  toggleModal = () => {
    const { modal } = this.state;
    return this.setState({ modal: !modal });
  }

  render() {
    const {
      props,
      state,
      values,
      ...events
    } = this;

    const passedProps = {
      questions: props.questions,
      answers: state.answers,
      updateAnswer: events.updateAnswer,
      sendWhatsapp: events.sendWhatsApp,
      deleteStory: events.deleteStory,
      title: props.title,
      isoKey: props.isoKey,
      toggleModal: events.toggleModal,
      modal: state.modal,
    };

    return <Markup {...passedProps} />;
  }
}


export default Story;


Story.propTypes = {
  questions: t.arrayOf(t.shape({
    question: t.string,
    description: t.string,
  })).isRequired,
  answers: t.arrayOf(t.string),
};


Story.defaultProps = {
  answers: [],
};
