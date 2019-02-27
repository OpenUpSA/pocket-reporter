import React, { Component } from 'react';
import t from 'prop-types';


import Markup from './Markup';


class Profile extends Component {
  constructor(props) {
    super(props);
    const { isoKey: initialIsoKey } = this.props;


    this.state = {
      isoKey: initialIsoKey || 'eng',
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


export default Profile;


Profile.propTypes = {
  isoKey: t.string.isRequired,
  changeCallback: t.func,
};


Profile.defaultProps = {
  changeCallback: null,
};
