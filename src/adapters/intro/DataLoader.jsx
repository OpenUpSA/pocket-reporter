import React, { Component } from 'react';
import { navigate } from 'gatsby';

import Onboarding from '../../views/Onboarding';
import Loading from '../../views/Loading';


class DataLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    return this.setState({ loading: false });
  }

  render() {
    const { props, state } = this;

    if (state.loading) {
      return <Loading />;
    }

    const passedProps = {
      onCompleteOnboarding: () => {
        props.logOnboarded();
        return navigate('./start/');
      },
    };

    return <Onboarding {...passedProps} />;
  }
}


export default DataLoader;
