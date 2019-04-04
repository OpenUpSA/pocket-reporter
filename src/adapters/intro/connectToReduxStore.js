import { connect } from 'react-redux';

import { completeOnboarding } from '../../redux/modules/info';

const stateToProps = (state, ownProps) => ({
  ...ownProps,
});

const dispatchToProps = (dispatch, ownProps) => ({
  logOnboarded: () => dispatch(completeOnboarding()),
  ...ownProps,
});

const connectToReduxStore = connect(stateToProps, dispatchToProps);

export default connectToReduxStore;
