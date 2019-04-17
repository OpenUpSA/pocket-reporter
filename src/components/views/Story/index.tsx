import React, { Component } from 'react';
import Presentation from './Presentation';

interface Tprops {
  navigate: any;
  onSendAction: any;
  onDeleteAction: any;
  id: any;
  story: any;
}

interface Tstate {
  deleteModal: any;
}

class Story extends Component<Tprops, Tstate> {
  events = {
    toggleDeleteModal: this.toggleDeleteModal.bind(this),
    sendAction: this.sendAction.bind(this),
    deleteAction: this.deleteAction.bind(this),
  };

  constructor(props) {
    super(props);

    this.state = {
      deleteModal: false,
    };
  }

  toggleDeleteModal() {
    const { deleteModal } = this.state;
    this.setState({ deleteModal: !deleteModal });
  }

  sendAction() {
    const { onSendAction, id } = this.props;
    onSendAction(id);
  }

  deleteAction() {
    const { navigate, onDeleteAction, id } = this.props;
    onDeleteAction(id);
    navigate('/stories');
  }

  render() {
    return <Presentation {...{ ...this.props, ...this.state, ...this.events }} />;
  }
}

export default Story;
