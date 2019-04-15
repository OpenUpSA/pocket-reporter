import React, { Component } from 'react';

/**
 * Imports tooling needed to load, validate and transform data.
 */
// import { Tprops, Tstate } from './schema';

/**
 * Imports possible views that can be loaded.
 */
import SplashScreen from '../../views/SplashScreen';

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
      return <SplashScreen loading />;
    }

    const { setLanguage, navigate } = this.props;
    return <SplashScreen {...{ setLanguage, navigate }} />;
  }
}

export default ViewLoader;
