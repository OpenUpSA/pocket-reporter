import React, { Component } from 'react';
import { parse } from 'query-string';
import { navigate } from 'gatsby';

/**
 * Imports possible views that can be loaded.
 */
import Story from '../../views/Story';

/**
 * TODO: Add description
 */
class ViewLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      whatsapp: false,
      story: null,
    };
  }

  /**
   * Fetches and resolves remote data once JavaScript loads in the web browser.
   */
  componentDidMount(): null {
    const { id, whatsapp } = parse(window.location.search);
    const { stories, navigate } = this.props;
    const storyObject = stories[id];

    if (!storyObject) {
      navigate('/');
      return null;
    }

    const story = {
      ...storyObject,
      id,
    };

    this.setState({
      story,
      whatsapp,
      loading: false,
    });
    return null;
  }

  /**
   * Renders a specific view based on the current internal state of `<ViewLoader />`.
   */
  render(): JSX.Element {
    const { loading, story, whatsapp } = this.state;

    if (loading || !story) {
      return <Story loading />;
    }

    const { answers: rawAnswers, ...otherProps } = story;
    const keys = Object.keys(rawAnswers);
    const answers = keys.map(key => {
      const { question: title, ...innerProps } = rawAnswers[key];
      return { title, ...innerProps };
    });

    const { onSendAction, onDeleteAction, onUpdateAction } = this.props;
    return (
      <Story
        {...{
          ...otherProps,
          answers,
          whatsapp,
          onSendAction,
          onDeleteAction,
          onUpdateAction,
          navigate,
        }}
      />
    );
  }
}

export default ViewLoader;
