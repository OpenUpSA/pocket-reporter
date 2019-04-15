import React, { Component } from 'react';

/**
 * Imports possible views that can be loaded.
 */
import Profile from '../../views/Profile';

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
  componentDidMount(): void {
    this.setState({
      loading: false,
    });
  }

  /**
   * Renders a specific view based on the current internal state of `<ViewLoader />`.
   */
  render(): JSX.Element {
    const { loading } = this.state;

    if (loading) {
      return <Profile loading />;
    }

    return <Profile loading={false} {...this.props} />;
  }
}

export default ViewLoader;
