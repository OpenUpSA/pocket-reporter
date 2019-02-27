import React, { Component } from 'react';
import t from 'prop-types';


import Markup from './Markup';


class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isoKey: null,
    };
  }

  setIsoKey = (isoKey) => {
    const { changeCallback } = this.props;

    if (changeCallback) {
      changeCallback(isoKey);
    }

    return this.setState({ isoKey });
  }

  render() {
    const {
      props,
      state,
      values,
      ...events
    } = this;

    const passedProps = {
      isoKey: state.isoKey,
      setIsoKey: events.setIsoKey,
    };

    return <Markup {...passedProps} />;
  }
}


export default SplashScreen;


SplashScreen.propTypes = {
  changeCallback: t.func,
};


SplashScreen.defaultProps = {
  changeCallback: null,
};
