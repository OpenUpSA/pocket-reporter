import React, { Component, createRef } from 'react';
import Presentation from './Presentation';
import { Tprops, Tstate } from './schema';

class FolderContent extends Component<Tprops, Tstate> {
  values = {
    inputRef: createRef(),
  };

  events = {
    setModalId: this.setModalId.bind(this),
    createStory: this.createStory.bind(this),
  };

  constructor(props) {
    super(props);

    this.state = {
      modalId: null,
      title: null,
    };
  }

  setModalId(modalId, title): void {
    this.setState({ modalId, title });
  }

  createStory(): null {
    const { onStoryTemplatePress } = this.props;
    const { modalId, title } = this.state;
    const { value } = this.values.inputRef.current;

    if (!value || /^\s+$/.test(value)) {
      return null;
    }

    if (!!modalId && onStoryTemplatePress) {
      onStoryTemplatePress(value, modalId, title);
    }

    this.setState({ modalId: null });
    return null;
  }

  render(): JSX.Element {
    const { questions: questionsNoClick, ...otherProps } = this.props;
    const { modalId } = this.state;
    const { setModalId, createStory } = this.events;

    const questions = questionsNoClick.map(({ title, questions: QuestionToCreate }) => ({
      title,
      click: () => setModalId(QuestionToCreate, title),
    }));

    const modalProps = {
      inputRef: this.values.inputRef,
      open: !!modalId,
      closeAction: () => setModalId(null),
      questions: modalId,
      createAction: createStory,
    };

    const passedProps = {
      questions,
      modalProps,
      ...otherProps,
      ...this.events,
    };

    return <Presentation {...passedProps} />;
  }
}

export default FolderContent;
