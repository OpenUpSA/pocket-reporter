import React, { Component } from 'react';

/**
 * Imports possible views that can be loaded.
 */
import ListOfStories from '../../views/ListOfStories';

/**
 * TODO: Add description
 */
class ViewLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  /**
   * Fetches and resolves remote data once JavaScript loads in the web browser.
   */
  componentDidMount(): null {
    this.setState({
      loading: false,
    });
    return null;
  }

  /**
   * Renders a specific view based on the current internal state of `<ViewLoader />`.
   */
  render(): JSX.Element {
    const { loading } = this.state;

    if (loading) {
      return <ListOfStories loading />;
    }

    return <ListOfStories {...this.props} />;
  }
}

export default ViewLoader;
