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
  /** Displays the language that has been selected by the user (as isoKey)
   * in the header-bar. Is also used to determine what language should be
   * used for the hardcode UI-specific/instructional text on the page. */
  isoKey: t.string.isRequired,
  changeCallback: t.func,
};


Profile.defaultProps = {
  changeCallback: null,
};
