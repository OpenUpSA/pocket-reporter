import React, { Component, createRef } from 'react';
import t from 'prop-types';


import Markup from './Markup';


class FolderContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalId: null,
    };

    this.values = {
      newTitle: createRef(),
    };
  }

  createStory = (id) => {
    const { newTitle } = this.values;
    console.log(newTitle.current.value);
    console.log(id);
    return this.setState({ modalId: null });
  }

  setModalId = (modalId) => {
    if (modalId === null) {
      return this.setState({
        modalId,
      });
    }

    return this.setState({ modalId });
  }

  render() {
    const {
      props,
      state,
      values,
      ...events
    } = this;

    const questions = props.questions.map(object => ({
      ...object,
      click: () => events.setModalId(object.title),
    }));

    const passedProps = {
      modalId: state.modalId,
      setModalId: events.setModalId,
      link: props.link,
      questions,
      resources: props.resources,
      isoKey: props.isoKey,
      createStory: events.createStory,
      newTitle: values.newTitle,
      icon: props.icon,
    };

    return <Markup {...passedProps} />;
  }
}


export default FolderContent;


FolderContent.propTypes = {
  isoKey: t.string.isRequired,
  link: t.node,
  questions: t.arrayOf(t.shape({
    id: t.string,
    title: t.string,
    icon: t.string,
  })).isRequired,
  resources: t.arrayOf(t.shape({
    id: t.string,
    title: t.string,
    icon: t.string,
    click: t.string,
  })).isRequired,
};


FolderContent.defaultProps = {
  link: null,
};
